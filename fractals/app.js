const canvas = document.getElementById("glcanvas");
const gl = canvas.getContext("webgl2", { antialias: false, preserveDrawingBuffer: false });

if (!gl) {
  throw new Error("WebGL2 is required. Try a modern Chrome/Firefox/Safari.");
}

const controls = {
  digitLocation: document.getElementById("digitLocation"),
  digitLocationValue: document.getElementById("digitLocationValue"),
  snapToIntegers: document.getElementById("snapToIntegers"),
  colorfulness: document.getElementById("colorfulness"),
  colorfulnessValue: document.getElementById("colorfulnessValue"),
  colorOffset: document.getElementById("colorOffset"),
  colorOffsetValue: document.getElementById("colorOffsetValue"),
  resetBtn: document.getElementById("resetBtn"),
  stats: document.getElementById("stats")
};

const vertexSource = `#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentSource = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 outColor;

uniform vec2 u_resolution;
uniform vec2 u_center;
uniform float u_scale;
uniform int u_digitLocation;
uniform float u_colorfulness;
uniform float u_colorOffset;
uniform int u_snapToIntegers;

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263, 0.416, 0.557);
  return a + b * cos(6.28318 * (c * t + d));
}

float digitFromLogValue(float value, int location) {
  float frac = fract(abs(value));
  float digit = 0.0;
  for (int i = 0; i < 16; i++) {
    frac *= 10.0;
    float current = floor(frac + 0.0000001);
    frac = fract(frac);
    if (i == location) {
      digit = mod(current, 10.0);
    }
  }
  return digit;
}

void main() {
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 p = (v_uv * 2.0 - 1.0) * aspect * u_scale + u_center;

  float x = p.x;
  float base = p.y;

  if (u_snapToIntegers == 1) {
    x = floor(x);
    base = floor(base);
  }

  float digit = 0.0;
  bool valid = true;

  // Match Python behavior: values with base < 1 are hard-coded to zero.
  if (base < 1.0) {
    valid = false;
  }

  // log(x, base) domain checks; invalid cases map to zero like try/except in Python.
  if (valid && (x <= 0.0 || base <= 0.0 || abs(base - 1.0) < 1e-12)) {
    valid = false;
  }

  if (valid) {
    float value = log(x) / log(base);
    if (!(isnan(value) || isinf(value))) {
      digit = digitFromLogValue(value, u_digitLocation);
    }
  }

  float t = fract((digit / 10.0) * u_colorfulness + u_colorOffset);
  vec3 color = palette(t);
  outColor = vec4(color, 1.0);
}`;

function compileShader(glCtx, type, source) {
  const shader = glCtx.createShader(type);
  glCtx.shaderSource(shader, source);
  glCtx.compileShader(shader);
  if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
    throw new Error(glCtx.getShaderInfoLog(shader) || "Shader compile failed");
  }
  return shader;
}

function createProgram(glCtx, vsSource, fsSource) {
  const vs = compileShader(glCtx, glCtx.VERTEX_SHADER, vsSource);
  const fs = compileShader(glCtx, glCtx.FRAGMENT_SHADER, fsSource);
  const program = glCtx.createProgram();
  glCtx.attachShader(program, vs);
  glCtx.attachShader(program, fs);
  glCtx.linkProgram(program);
  if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
    throw new Error(glCtx.getProgramInfoLog(program) || "Program link failed");
  }
  glCtx.deleteShader(vs);
  glCtx.deleteShader(fs);
  return program;
}

const program = createProgram(gl, vertexSource, fragmentSource);
gl.useProgram(program);

const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);

const vao = gl.createVertexArray();
const vbo = gl.createBuffer();
gl.bindVertexArray(vao);
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

const posLoc = gl.getAttribLocation(program, "a_position");
gl.enableVertexAttribArray(posLoc);
gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
gl.bindVertexArray(null);

const uniforms = {
  resolution: gl.getUniformLocation(program, "u_resolution"),
  center: gl.getUniformLocation(program, "u_center"),
  scale: gl.getUniformLocation(program, "u_scale"),
  digitLocation: gl.getUniformLocation(program, "u_digitLocation"),
  colorfulness: gl.getUniformLocation(program, "u_colorfulness"),
  colorOffset: gl.getUniformLocation(program, "u_colorOffset"),
  snapToIntegers: gl.getUniformLocation(program, "u_snapToIntegers")
};

const state = {
  centerX: 300,
  centerY: 300,
  scale: 300,
  digitLocation: Number(controls.digitLocation.value),
  colorfulness: Number(controls.colorfulness.value),
  colorOffset: Number(controls.colorOffset.value),
  snapToIntegers: controls.snapToIntegers.checked,
  dragging: false,
  lastX: 0,
  lastY: 0,
  frameCount: 0,
  lastFpsTs: performance.now(),
  fps: 0
};

function resetView() {
  state.centerX = 300;
  state.centerY = 300;
  state.scale = 300;
}

function updateControlLabels() {
  controls.digitLocationValue.textContent = String(state.digitLocation);
  controls.colorfulnessValue.textContent = state.colorfulness.toFixed(2);
  controls.colorOffsetValue.textContent = state.colorOffset.toFixed(3);
}

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const displayWidth = Math.floor(canvas.clientWidth * dpr);
  const displayHeight = Math.floor(canvas.clientHeight * dpr);

  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
    gl.viewport(0, 0, displayWidth, displayHeight);
  }
}

function applyUniforms() {
  gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
  gl.uniform2f(uniforms.center, state.centerX, state.centerY);
  gl.uniform1f(uniforms.scale, state.scale);
  gl.uniform1i(uniforms.digitLocation, state.digitLocation);
  gl.uniform1f(uniforms.colorfulness, state.colorfulness);
  gl.uniform1f(uniforms.colorOffset, state.colorOffset);
  gl.uniform1i(uniforms.snapToIntegers, state.snapToIntegers ? 1 : 0);
}

function worldFromPixel(px, py) {
  const aspect = canvas.width / canvas.height;
  const nx = (px / canvas.width) * 2 - 1;
  const ny = 1 - (py / canvas.height) * 2;
  return {
    x: state.centerX + nx * aspect * state.scale,
    y: state.centerY + ny * state.scale
  };
}

function zoomAt(pixelX, pixelY, factor) {
  const before = worldFromPixel(pixelX, pixelY);
  state.scale *= factor;
  const after = worldFromPixel(pixelX, pixelY);
  state.centerX += before.x - after.x;
  state.centerY += before.y - after.y;
}

function updateStats() {
  controls.stats.innerHTML = [
    `center: (${state.centerX.toFixed(4)}, ${state.centerY.toFixed(4)})`,
    `scale: ${state.scale.toExponential(5)}`,
    `digit location: ${state.digitLocation}`,
    `mode: ${state.snapToIntegers ? "Python grid" : "continuous"}`,
    `fps: ${state.fps.toFixed(1)}`
  ].join("<br>");
}

function render(ts) {
  resizeCanvas();
  gl.useProgram(program);
  gl.bindVertexArray(vao);
  applyUniforms();
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  state.frameCount += 1;
  const elapsed = ts - state.lastFpsTs;
  if (elapsed >= 250) {
    state.fps = (state.frameCount * 1000) / elapsed;
    state.frameCount = 0;
    state.lastFpsTs = ts;
    updateStats();
  }

  requestAnimationFrame(render);
}

controls.digitLocation.addEventListener("input", (e) => {
  state.digitLocation = Number(e.target.value);
  updateControlLabels();
});

controls.snapToIntegers.addEventListener("change", (e) => {
  state.snapToIntegers = e.target.checked;
  updateStats();
});

controls.colorfulness.addEventListener("input", (e) => {
  state.colorfulness = Number(e.target.value);
  updateControlLabels();
});

controls.colorOffset.addEventListener("input", (e) => {
  state.colorOffset = Number(e.target.value);
  updateControlLabels();
});

controls.resetBtn.addEventListener("click", () => {
  resetView();
});

canvas.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 0.9 : 1.1;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    zoomAt(x, y, factor);
  },
  { passive: false }
);

canvas.addEventListener("pointerdown", (e) => {
  canvas.setPointerCapture(e.pointerId);
  state.dragging = true;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
  canvas.classList.add("dragging");
});

canvas.addEventListener("pointermove", (e) => {
  if (!state.dragging) {
    return;
  }

  const dx = e.clientX - state.lastX;
  const dy = e.clientY - state.lastY;
  state.lastX = e.clientX;
  state.lastY = e.clientY;

  const aspect = canvas.width / canvas.height;
  state.centerX -= (dx / canvas.width) * 2 * aspect * state.scale;
  state.centerY += (dy / canvas.height) * 2 * state.scale;
});

function endDrag() {
  state.dragging = false;
  canvas.classList.remove("dragging");
}

canvas.addEventListener("pointerup", endDrag);
canvas.addEventListener("pointercancel", endDrag);
canvas.addEventListener("pointerleave", endDrag);

canvas.addEventListener("dblclick", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) * (canvas.width / rect.width);
  const y = (e.clientY - rect.top) * (canvas.height / rect.height);
  const world = worldFromPixel(x, y);
  state.centerX = world.x;
  state.centerY = world.y;
  state.scale *= 0.55;
});

window.addEventListener("keydown", (e) => {
  if (e.key === "[") {
    state.digitLocation = Math.max(0, state.digitLocation - 1);
    controls.digitLocation.value = String(state.digitLocation);
    updateControlLabels();
  } else if (e.key === "]") {
    state.digitLocation = Math.min(6, state.digitLocation + 1);
    controls.digitLocation.value = String(state.digitLocation);
    updateControlLabels();
  } else if (e.key === "g" || e.key === "G") {
    state.snapToIntegers = !state.snapToIntegers;
    controls.snapToIntegers.checked = state.snapToIntegers;
    updateStats();
  } else if (e.key === "r" || e.key === "R") {
    resetView();
  }
});

resetView();
updateControlLabels();
updateStats();
requestAnimationFrame(render);
