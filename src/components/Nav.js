import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({right,left}) => (
  <div className="nav-container">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/projects/1">Project 1</Link>
  <Link to="/projects/2">Project 2</Link>
  </div>
);

export default Nav;
