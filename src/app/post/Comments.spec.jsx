/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Comments from './Comments';

describe('Comments', function() {
  let component;

  beforeEach(function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Comments/>);
    component = renderer.getRenderOutput();
  });

  it('contains the text No comments yet.. if comments.length is less than or equal to 0', function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Comments/>);
    component = renderer.getRenderOutput();
    // const domNode = ReactDOM.find(component);
    var a = FindRenderedDOMComponentWithClass('.no-comments');
    // const a = domNode.querySelector('.no-comments');
    expect(a).toContain("No comments yet..");
  });

  // it('Does not contains the text No comments yet.. if there are comments', function() {
  //   var a = document.querySelector('.no-comments');
  //   expect(a).not.toContain("No comments yet..");
  // });

});