import React, { Component } from 'react';
import disclaimerContent from '../content/DisclaimerContent';
import '../styles/css/Disclaimer.css';

class Officer extends Component {
  render() {
    return (
      <div className="university-disclaimer">
        <p>{disclaimerContent.disclaimer}</p>
      </div>
    );
  }
}

export default Officer;
