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

const reduce_when_not_null = (item, rank) => {
  if (item !== null) {
    rank--;
  }

  return rank;
};

const reduce_when_greater_then_one = (item, rank) => {
  if (item > 0) {
    rank--;
  }
  return rank;
};

const rank_repos = (repos) => {
  for (var i = 0; i < repos.length; i++) {
    var entry = repos[i];
    var rank = 4;

    rank = reduce_when_not_null(entry['node']['license'], rank);
    rank = reduce_when_not_null(entry['node']['language'], rank);
    rank = reduce_when_greater_then_one(
      entry['node']['stargazers_count'],
      rank
    );

    entry['node']['rank'] =
      rank - parseInt(entry['node']['stargazers_count'], 10);
  }
  return repos;
};

function sort_repos(repos) {
  repos.sort(function (first, second) {
    return first['node'].rank !== second['node'].rank
      ? first['node'].rank < second['node'].rank
        ? -1
        : 1
      : 0;
  });
  return repos;
}

const RepositoriesPage = () => {
  const { links } = useStaticQuery(graphql`
    {
      links: allRepositoriesJson(sort: { fields: archived }) {
        edges {
          node {
            id
            name
            license {
              name
            }
            stargazers_count
            archived
            created_at
            description
            html_url
            language
          }
        }
      }
    }
  `);

  return (
    <main style={pageStyles}>
      <title>Repositories - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Repositories</h1>
      <ul style={listStyles}>
        {sort_repos(rank_repos(links.edges)).map((link) => (
          <li key={link['node'].html_url} style={{ ...listItemStyles }}>
            <span>
              <a style={linkStyle} href={link['node'].html_url}>
                {link['node'].name}
              </a>
              <p style={descriptionStyle}>{link['node'].description}</p>
              <p style={descriptionStyle}>{link['node'].language}</p>
              <p style={descriptionStyle}>{link['node'].created_at}</p>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default RepositoriesPage;
