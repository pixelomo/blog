/**
 * @overview Home page.  Renders static content.
 */
import React from 'react';

// Render static HTML:
import __html from './home.html';

const Home = () => <div dangerouslySetInnerHTML={{ __html }} />;

export default Home;
