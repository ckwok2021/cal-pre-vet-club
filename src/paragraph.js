import React, { Component } from 'react';
import "./styles/text.css";

class Par extends Component {
  render() {
    return (
      <div className="paragraph"> {this.props.content} </div>
    )
  }
}

export default Par;
