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

const StatsProject = () => {
  return (
    <main style={pageStyles}>
      <title>Stats Project 2022 - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Stats Project 2022</h1>

		<a href="https://github.com/JakeRoggenbuck/stats-project-2022/blob/main/Graphs.ipynb">Graphs.ipynb</a>

      <Footer />
    </main>
  );
};

export default StatsProject;
