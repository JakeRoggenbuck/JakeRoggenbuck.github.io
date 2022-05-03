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
    name: 'QME Games',
    desc: 'I am project manager for the QME Games group.',
    url: 'https://github.com/qmegame/',
  },
  {
    name: 'Software Club',
    desc: 'President of a club dedicated to teaching members of the DVCA High School how to write useful software and prepare for industry.',
    url: 'https://jr0.org/software-club.html',
  },
  {
    name: 'DHS Gamedev',
    desc: 'Project manager for the DHS game development club.',
    url: 'https://github.com/dhs-gamedev/',
  },
  {
    name: 'DHS Coding Club',
    desc: 'Project manager & presenter for the DHS Coding Club',
    url: 'https://github.com/dhs-gamedev/',
  },
  {
    name: 'DV-CSHS',
    desc: 'I am the president of the Da Vinci Computer Science Honors Society.',
    url: 'https://sites.google.com/djusdstudents.org/dv-cshs',
  },
  {
    name: 'Citrus Circuits',
    desc: 'I have been a member of the the Citrus Circuits FRC robotics team for four years.',
    url: 'https://www.citruscircuits.org/',
  },
];

const ClubsPage = () => {
  return (
    <main style={pageStyles}>
      <title>Clubs - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Clubs</h1>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              <a style={linkStyle} href={link.url}>
                {link.name}
              </a>
              <p style={descriptionStyle}>{link.desc}</p>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default ClubsPage;
