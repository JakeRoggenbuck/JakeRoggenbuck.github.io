import * as React from 'react';
import Footer from '../elements/footer';
import { graphql, useStaticQuery } from 'gatsby';

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
            links
          }
        }
      }
    }
  `);

  const devlogs_list = devlogs.edges.reverse();

  return (
    <main style={pageStyles}>
      <title>Devlog - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Devlog</h1>
      <ul style={listStyles}>
        {devlogs_list.map((link) => (
          <li key={link['node'].title} style={{ ...listItemStyles }}>
            <span>
              <a style={linkStyle}>{link['node'].title}</a>
              <p style={descriptionStyle}>{link['node'].text}</p>
              <p style={descriptionStyle}>{link['node'].date}</p>

              <ul>
                {link['node'].links.map((entry) => (
                  <a style={linkStyle} href={entry}>
                    <li>
                      <p style={descriptionStyle}>{entry}</p>
                    </li>
                  </a>
                ))}
              </ul>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default DevlogPage;
