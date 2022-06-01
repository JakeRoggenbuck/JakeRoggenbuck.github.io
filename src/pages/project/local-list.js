import * as React from 'react';
import Footer from '../../elements/footer';

import {
  pageStyles,
  headingStyles,
  linkStyle,
} from '../../style';

const LocalList = () => {
  return (
    <main style={pageStyles}>
      <title>Local List - Jake Roggenbuck</title>
      <h1 style={headingStyles}>Local List</h1>

      <h3>
        Local List is a Web App that allows users to search and discover local
        products and services in their area. This project was made as a part of
        a school project but has since expanded and partnered with real
        businesses.
      </h3>

      <h2>
        Visit the page!{' '}
        <a style={linkStyle} href="thelocallist.org">
          TheLocalList.org
        </a>
      </h2>

      <h3>
        The tides have turned and the majority of sales happen on Amazon,
        seemingly irreversibly drowning local business. Our mission is to tip
        the scale back in favor of local business before it is too late. By
        increasing business presence and searchability, local business will grow
        their user base and increase sales. This endeavor is only the first step
        to modernizing local and small businesses.
      </h3>

      <h2>
        View the devlog posts about it{' '}
        <a style={linkStyle} href="/devlog">
          Local List Devlog
        </a>
      </h2>

      <Footer />
    </main>
  );
};

export default LocalList;
