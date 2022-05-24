import * as React from 'react';
import Footer from '../../elements/footer';

import {
  pageStyles,
  headingStyles,
  listStyles,
  listItemStyles,
  linkStyle,
  descriptionStyle,
} from '../../style';

const resources = [
  {
    name: 'PyGame Intro Slides',
    url: 'https://raw.githubusercontent.com/JakeRoggenbuck/ocean-game-py/main/pygame_slides.pdf',
    description: 'Slides for a simple ocean game demo in Python for DV Game Jam',
  },

  {
    name: 'P5.js Intro Slides',
    url: 'https://raw.githubusercontent.com/JakeRoggenbuck/ocean-game-js/main/P5.js%20Intro.pdf',
    description: 'Slides for a simple ocean game demo in Javascript for DV Game Jam',
  },

  {
    name: 'PyGame Intro Code',
    url: 'https://github.com/JakeRoggenbuck/ocean-game-py',
    description: 'Codes for a simple ocean game demo in Python for DV Game Jam',
  },

  {
    name: 'P5.js Intro Code',
    url: 'https://github.com/JakeRoggenbuck/ocean-game-js',
    description: 'Code for a simple ocean game demo in Javascript for DV Game Jam',
  },
];

const GameJamPage = () => {
  return (
    <main style={pageStyles}>
      <title>DV Game Jam 2022 - Jake Roggenbuck</title>
      <h1 style={headingStyles}>DV Game Jam 2022</h1>
      <h3>This was the first annual Da Vinci Game Jam.</h3>

      <br />
      <h2>Here are some resources.</h2>

      <ul style={listStyles}>
        {resources.map((resource) => (
          <li key={resource.url} style={{ ...listItemStyles }}>
            <span>
              <a style={linkStyle} href={resource.url}>
                {resource.name}
              </a>
              <p style={descriptionStyle}>{resource.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default GameJamPage;
