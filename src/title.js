import React, { Component } from 'react';
import "./text.css";

class Title extends Component {
  render() {
    return (
      <div className="titles"> {this.props.name} </div>
    )
  }
}

export default Title;
