import React, { Component } from 'react';
import Modal from './Modal.js';
import { Link } from 'react-router-dom';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  render() {
    return (
        <div className={this.props.className}>
          <Link to={"/photos/" + this.props.name} >
            <img src={this.props.src} />
            <div className="photo__overlay"></div>
            <div className="label">
              {this.props.name}
            </div>
          </Link>
        </div>
      
    )
  }
}

export default Photo;