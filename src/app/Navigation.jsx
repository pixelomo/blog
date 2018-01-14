import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <nav className="row light-blue darken-4">
    <div className="nav-wrapper">
      <h1><a href="/" className="brand-logo">Telnyx</a></h1>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className='nav-item'>
          <Link to={`/home`} className='nav-link' activeClassName='active'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to={`/about`} className='nav-link' activeClassName='active'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to={`/blog`} className='nav-link' activeClassName='active'>Blog</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
