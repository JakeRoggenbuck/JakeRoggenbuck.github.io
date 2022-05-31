import * as React from 'react';
import Footer from '../elements/footer';

import {
  pageStyles,
  headingStyles,
  headingAccentStyles,
  listStyles,
  listItemStyles,
  linkStyle,
  descriptionStyle,
} from '../style';

const links = [
  {
    text: 'Git Repositories',
    url: 'repositories',
    description:
      'All of my repositories can be found on my Github. I have some of my favorites highlighted on the git repositories page.',
    color: '#fdb549',
  },
  {
    text: 'Clubs',
    url: 'clubs',
    description: 'Here are the clubs and groups I am a part of.',
    color: '#fdb549',
  },
  {
    text: 'Devlog',
    url: 'devlog',
    description:
      'A collection of monthly summaries compirsed of particular projects, progress, and discoveries.',
    color: '#fdb549',
  },
  {
    text: 'Tutoring',
    url: 'tutoring',
    description:
      'Information about the classes I teach as a part of my tutoring program.',
    color: '#fdb549',
  },

  {
    text: 'Research',
    url: 'research',
    description: 'A collection of research and explorations.',
    color: '#fdb549',
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page - Jake Roggenbuck</title>
      <h1 style={headingStyles}>
        Jake Roggenbuck
        <br />
        <span style={headingAccentStyles}>
          — Programmer, Computer Science Student
        </span>
      </h1>

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={link.url}>
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default IndexPage;
