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

const links = [
  {
    text: 'Auto Clock Speed',
    url: 'auto-clock-speed',
    link: 'https://github.com/jakeroggenbuck/auto-clock-speed',
    description:
      'A utility to check stats about your CPU, and auto regulate clock speeds to help with either performance or battery life.',
    color: '#fdb549',
  },
  {
    text: 'Local List',
    url: 'local-list',
    link: 'http://thelocallist.org',
    description: 'Local goods and service discovery system.',
    color: '#fdb549',
  },
  {
    text: 'Statistical Tests Rs',
    url: 'statistical-tests-rs',
    link: 'https://github.com/jakeroggenbuck/statistical-tests-rs',
    description: 'Statistical Tests for Rust',
    color: '#fdb549',
  },
  {
    text: 'Ocean Game Py',
    url: 'ocean-game-py',
    link: 'https://github.com/jakeroggenbuck/ocean-game-py',
    description: 'Simple ocean game demo in Python for DV Game Jam',
    color: '#fdb549',
  },
  {
    text: 'Ocean Game Js',
    url: 'ocean-game-js',
    link: 'https://github.com/jakeroggenbuck/ocean-game-js',
    description: 'Simple ocean game demo in Javascript for DV Game Jam',
    color: '#fdb549',
  },
];

const ProjectInvent = () => {
  return (
    <main style={pageStyles}>
      <title>Project Invent - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Project Invent</h1>

      <h2>Here is a list of portfolio projects for my Project Invent Class.</h2>

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={'#' + link.url}>
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>

      {links.map((link) => (
        <div id={link.url} style={{ ...listItemStyles }}>
          <span>
            <h2 style={{ color: link.color }}>{link.text}</h2>
            <p>{link.description}</p>
            <a href={link.link}>
              <p>{link.link}</p>
            </a>
          </span>
          <br />
        </div>
      ))}

      <Footer />
    </main>
  );
};

export default ProjectInvent;
