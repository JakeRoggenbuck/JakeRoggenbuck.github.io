from fastapi import FastAPI, Body
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
def func(key: str = Body(...)):

    time = datetime.now().strftime("%m-%d-%Y_%H-%M-%S")
    with open(f"new_{time}", "w") as file:
        file.write(key)

    return "done"
