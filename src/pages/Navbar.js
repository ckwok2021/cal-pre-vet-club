import React, { Component } from 'react';
import '../styles/css/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/navbar/customlogo.jpg';
import classnames from 'classnames';
import "../styles/hamburgers.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this._handleClick = this._handleClick.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleClick(e) {
    this.setState({
      open: !this.state.open,
    });
  }

  _handleClose(e) {
    this.setState({
      open: false,
    });
  }


  render() {
    return (
      <div className={classnames('navbar', { 'navbar--open': this.state.open})}>
        <NavLink to="/" className="link"><img src={logo}/></NavLink>
        <button 
          className={classnames('hamburger', 'hamburger--collapse', { 'is-active': this.state.open})} 
          type="button"
          onClick={this._handleClick}
        >
          <span className="hamburger-box"> 
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className={classnames('nav__container', { 'container--open': !this.state.open})}>
          <NavLink 
            to="/photos" 
            activeClassName="active"
            className="link"
          > 
            Photos
          </NavLink>
          <NavLink 
            to="/members" 
            activeClassName="active"
            className="link"
          >
            Members
          </NavLink>
          <NavLink 
            to="/officers"
            activeClassName="active"
            className="link"
          >
            Officers
          </NavLink>
          <NavLink 
            to="/contact"
            activeClassName="active"
            className="link"
          >
            Contact
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;