import * as React from 'react';
import Footer from './footer';
import { graphql, useStaticQuery } from 'gatsby';
import Home from '../components/home';

import {
  pageStyles,
  headingStyles,
  headingAccentStyles,
  listStyles,
  listItemStyles,
  linkStyle,
  descriptionStyle,
} from '../style';

const DevlogPage = () => {
  const { devlogs } = useStaticQuery(graphql`
    {
      devlogs: allDevlogsJson {
        edges {
          node {
            id
            title
            text
            date
          }
        }
      }
    }
  `);

  console.log(devlogs);

  return (
    <main style={pageStyles}>
      <Home />
      <title>Devlog - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Devlog</h1>
      <ul style={listStyles}>
        {devlogs.edges.map((link) => (
          <li key={link['node'].title} style={{ ...listItemStyles }}>
            <span>
              <a style={linkStyle}>{link['node'].title}</a>
              <p style={descriptionStyle}>{link['node'].text}</p>
              <p style={descriptionStyle}>{link['node'].date}</p>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default DevlogPage;
