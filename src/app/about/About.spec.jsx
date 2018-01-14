/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import About from './About';

xdescribe('About', function() {
  let component;

  beforeEach(function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<About/>);
    component = renderer.getRenderOutput();
  });

  it('contains spec that returns true', function() {
    expect(true).toBe(true);
  });
});
