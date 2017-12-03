import React, { Component } from 'react';
import Photo from './Photo.js';
import '../styles/css/Modal.css';

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedOverlay: false
    }
  }

  toggleModal = () => {
    this.setState({
      clickedOverlay: !this.state.clickedOverlay
    })
  }

  render() {
    return(
      <div className="modal" style={ this.props.toggle && !this.state.clickedOverlay ? display : hide }>
        <div className="modal__content">
          <Photo className="modal__photo" src={ this.props.src } />
        </div>
        <div className="overlay" onClick={ this.toggleModal }>
        	Overlay
        </div>
      </div>
    );

  }
}

export default Modal;