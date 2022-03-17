import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function Snom() {
  return (
    <div>
      <h1>Could not find the page you are looking for.</h1>
      <h1>Here is Snom instead.</h1>
      <StaticImage
        src="../images/snom.png"
        alt="Underwater view of clear, blue body of water"
        width="300"
      />
    </div>
  );
}

export default Snom;
