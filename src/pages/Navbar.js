import React, { Component } from 'react';
import '../styles/css/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/navbar/customlogo.jpg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
            <li><Link to="/"><img src={logo}/></Link></li>
            <li><Link to="/photos">Photos</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/officers">Officers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;