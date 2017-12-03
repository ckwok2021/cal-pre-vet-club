import React, { Component } from 'react';
import Officer from '../components/Officer';
import '../styles/css/Officers.css';
import officersContent from '../content/OfficersContent.js';
import teamPhoto from '../images/officers/team.jpg';

class Officers extends Component {
  render() {
    return (
      <div className="officers">
        <div className="officers__header">
          <img src={teamPhoto}/>
          <div className="overlay"></div>
          <h2>Officers</h2>
        </div>
        <div className="officers__profiles">
          {officersContent.map((officer, index) =>
            <Officer officer={officer} key={index} ordering={index % 2 === 0 ? "left" : "right"} />
          )}
        </div>
      </div>
    );
  }
}

export default Officers;
