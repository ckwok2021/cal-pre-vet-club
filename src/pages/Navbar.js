import React, { Component } from 'react';
import '../styles/css/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/navbar/customlogo.jpg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
            <li><NavLink to="/"><img src={logo}/></NavLink></li>
            <li><NavLink to="/photos" activeClassName="active">Photos</NavLink></li>
            <li><NavLink to="/members" activeClassName="active">Members</NavLink></li>
            <li><NavLink to="/officers" activeClassName="active">Officers</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;