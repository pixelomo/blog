/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// Our app
import App   from './app/App';
import About from './app/about';
import Home  from './app/home';
import Blog  from './app/blog';
import Post  from './app/post';

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='about' component={About}/>
      <Route path='home' component={Home}/>
      <Route path='blog' component={Blog}/>
      <Route path='blog/:id' component={Post}/>
      <Redirect from='*' to='/home'/>
    </Route>
  </Router>
), document.getElementById('root'));


