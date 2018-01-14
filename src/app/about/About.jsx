/**
 * @overview About page.  Renders static content.
 */
import React from 'react';

// Render static HTML:
import __html from './about.html';

const About = () => <div dangerouslySetInnerHTML={{ __html }}/>;

export default About;
