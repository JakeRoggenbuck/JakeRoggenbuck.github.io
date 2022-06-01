import * as React from 'react';
import Footer from '../../elements/footer';

import {
  pageStyles,
  headingStyles,
  listStyles,
  listItemStyles,
  linkStyle,
} from '../../style';

const links = [
  {
    text: 'Auto Clock Speed',
    url: 'auto-clock-speed',
    link: 'https://github.com/jakeroggenbuck/auto-clock-speed',
    description:
      'A utility to check stats about your CPU, and auto regulate clock speeds to help with either performance or battery life. This is a project that I put a lot of time into, more than any other project outside of school, and has three active developers. This project required knowledge in low level system and unix-like operating systems, along with knowledge of Rust.',
    color: '#fdb549',
  },
  {
    text: 'Local List',
    url: 'local-list',
    link: 'http://thelocallist.org',
    description:
      'Local goods and service discovery system. This was apart of my Econ class and was a project where I got to use things I am very familiar with to build cool software. This project required knowledge in systems architecture and databases, along with Python, Javascript, and server stuff for hosting.',
    color: '#fdb549',
  },
  {
    text: 'Statistical Tests Rs',
    url: 'statistical-tests-rs',
    link: 'https://github.com/jakeroggenbuck/statistical-tests-rs',
    description:
      "Statistical Tests for Rust. I noticed that there is not a way to do any statistics other than mean and standard deviation of a population in Rust. The library doesn't even mention that it is just of a population, because there is standard deviation of a sample as well. I made both, and also made a two sample t test. This is so I can possibly made a tool in the future that helps with stats work, and I will use this library to compile it to wasm and then use it in a Javascript page so that it is fast, accurate, and usable in the browser.",
    color: '#fdb549',
  },
  {
    text: 'Ocean Game Py',
    url: 'ocean-game-py',
    link: 'https://github.com/jakeroggenbuck/ocean-game-py',
    description:
      'Simple ocean game demo in Python for DV Game Jam. This is a demo of how to build a simple game using pygame in Python, and includes slides showing step by step what stuff does.',
    color: '#fdb549',
  },
  {
    text: 'Ocean Game Js',
    url: 'ocean-game-js',
    link: 'https://github.com/jakeroggenbuck/ocean-game-js',
    description:
      'Simple ocean game demo in Javascript for DV Game Jam. This includes a slide show that gives step by step instructions of how things work.',
    color: '#fdb549',
  },
];

const ProjectInvent = () => {
  return (
    <main style={pageStyles}>
      <title>Project Invent - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Project Invent</h1>

      <h3>
        Here is a list of portfolio projects for my Project Invent Class.
        Project Invent is the end of the CTE Pathway and these projects show my
        wide variety of skills and interests. These are all recent projects that
        needed many hours of work each.
      </h3>

      <br />

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

      <h2>Retrospective</h2>
      <h3>
        I have grown a lot in the past few months. I have been able to projects
        for many months and put tons of hours into them. Before, I would simply
        add a few hundred lines to a project and forget about it, but now I have
        had personal growth and I am able to pick projects that will be fun and
        educational. For one, I have written about 4000 lines and delete another
        1000 lines of code over the past year.
      </h3>

      <br />

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
