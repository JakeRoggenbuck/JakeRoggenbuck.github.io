import * as React from 'react';
import { Link } from 'gatsby';
import Snom from './snom.js';

import {
  pageStyles,
  headingStyles,
} from '../style';

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        <Snom />
        <Link to="/">Leave Snom</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
