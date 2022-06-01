import * as React from 'react';
import Footer from '../elements/footer';

import {
  pageStyles,
  headingStyles,
  listStyles,
  listItemStyles,
  linkStyle,
  descriptionStyle,
} from '../style';

const smallLinkStyle = {
  color: '#29b6f6',
  fontWeight: 'bold',
};

const links = [
  {
    name: 'Intro to Python',
    description:
      'Learn the basics of programming with the Python Language. Learn variables, functions, control flow and more. The approach to learning in this class is applicable when learning any language or programming skill and is and amazing way to start.',
    prerequisites: [],
    times_available: [],
    url: 'https://forms.gle/WGMkphCnRN56fKc96',
    teachers: ['Jake R'],
    recommended: true,
  },
  {
    name: 'Intermediate Python',
    description:
      'Learn problem solving and algorithms in Python. The implementation of algorithms is one of the most sought-after skill in the industry.',
    prerequisites: ['Intro to python'],
    times_available: [],
    url: 'https://forms.gle/WGMkphCnRN56fKc96',
    teachers: ['Jake R'],
  },
  {
    name: 'Advanced Python',
    description:
      "Learn advanced programming topics through the use of Python and it's many libraries.",
    prerequisites: ['Intermediate Python'],
    times_available: [],
    url: 'https://forms.gle/WGMkphCnRN56fKc96',
    teachers: ['Jake R'],
  },
  {
    name: 'Intro to Javascript',
    description:
      'Learn the basics of programming in Javascript. Javascript is the most popular language, and has tons of uses in the Web. Javascript is used in lots of places in learning and industry.',
    prerequisites: [],
    times_available: [],
    url: 'https://forms.gle/WGMkphCnRN56fKc96',
    teachers: ['Jake R'],
    recommended: true,
  },
  {
    name: 'Intermediate Javascript',
    description:
      'Javascript is an amazing language when learned correctly. This class will be expanding on ideas from the intro class to perfect skills with Javascript.',
    prerequisites: ['Intro to Javascript'],
    times_available: [],
    url: 'https://forms.gle/WGMkphCnRN56fKc96',
    teachers: ['Jake R'],
  },
  {
    name: 'Advanced Javascript',
    description:
      "Learn advanced programming topics through the use of Javascript and it's many frameworks and libraries.",
    prerequisites: ['Intermediate Javascript'],
    times_available: [],
    url: 'https://forms.gle/WGMkphCnRN56fKc96',
    teachers: ['Jake R'],
  },
];

const TutoringPage = () => {
  return (
    <main style={pageStyles}>
      <title>Tutoring - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Tutoring</h1>

      <h3>
        My name is Jake Roggenbuck and I have been teaching and tutoring
        Computer Science for two years. I have taken CS Discoveries and APCS
        Principles. I also was a teaching assistant for Computer Science
        Discoveries. Here are the classes I teach as a part of my tutoring
        program started in the summer of 2021. If you would like to sign up for
        a class, click the name of the course to fill out the form.
      </h3>

      <h3>
        If you ave any questions, feel free to ask{' '}
        <a style={smallLinkStyle} href="mailto:tutoring@jr0.org">
          tutoring@jr0.org
        </a>
      </h3>

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              <a style={linkStyle} href={link.url}>
                {link.name}
              </a>
              {link.recommended ? ' ⭐' : ''}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default TutoringPage;
