import * as React from 'react';
import Footer from '../elements/footer';
import { graphql, useStaticQuery } from 'gatsby';

import {
  pageStyles,
  headingStyles,
  listStyles,
  listItemStyles,
  linkStyle,
  descriptionStyle,
} from '../style';

const ResearchPage = () => {
  const { all_research } = useStaticQuery(graphql`
    {
      all_research: allResearchJson {
        edges {
          node {
            name
            description
            url
          }
        }
      }
    }
  `);

  return (
    <main style={pageStyles}>
      <title>Research - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Research</h1>
      <h4>
        Note, <b>ipynb</b> files take a moment to load
      </h4>
      <ul style={listStyles}>
        {all_research.edges.map((research) => (
          <li key={research['node'].url} style={{ ...listItemStyles }}>
            <span>
              <a style={linkStyle} href={research['node'].url}>
                {research['node'].name}
              </a>
              <p style={descriptionStyle}>{research['node'].description}</p>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default ResearchPage;
