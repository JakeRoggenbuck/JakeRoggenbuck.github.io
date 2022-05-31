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
    url: '#auto-clock-speed',
	  link: 'https://github.com/jakeroggenbuck/auto-clock-speed',
    description: 'A utility to check stats about your CPU, and auto regulate clock speeds to help with either performance or battery life.',
    color: '#fdb549',
  },
];

const ProjectInvent = () => {
  return (
    <main style={pageStyles}>
      <title>Project Invent - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Project Invent</h1>

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={link.url}>
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>


        {links.map((link) => (
          <div id={link.url} style={{ ...listItemStyles}}>
            <span>
				<h2 style={{color: link.color}}>{link.text}</h2>
				<p>{link.description}</p>
				<a href={link.link}><p>{link.link}</p></a>
            </span>
          </div>
        ))}

      <Footer />
    </main>
  );
};

export default ProjectInvent;
