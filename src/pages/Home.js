import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import homeContent from '../content/HomeContent';
import '../styles/css/Home.css';

class Home extends Component {
  render() {
    const missionItems = homeContent.missionList.map((item) =>
      <li>{item}</li>
    );

    const interestedItems = homeContent.interestedList.map((item) =>
      <li>{item}</li>
    );

    const benefitsItems = homeContent.benefitsList.map((item) =>
      <li>{item}</li>
    );

    return (
      <div className='home-container'>
        <h2>Cal Pre-Vet Club</h2>
        <Carousel />
        <div className="home-section">
          <h3>Mission</h3>
          <p>{homeContent.mission}</p>
          <ul>{missionItems}</ul>
        </div>
        <div className="home-section">
          <h3>Why Cal PVC</h3>
          <p>{homeContent.whyPVC}</p>
        </div>
        <div className="home-section prospective-section">
          <h2>Prospective Members</h2>
          <h3>Interested in Veterinary Sciences?</h3>
          <p>{homeContent.interested}</p>
          <ul>{interestedItems}</ul>
        </div>
        <div className="home-section prospective-section">
          <h3>Active Membership</h3>
          <h4>Benefits</h4>
          <ul>{benefitsItems}</ul>
          <h4>Requirements</h4>
          <ul>
            <li>Minimum required for active membership= 6 pts</li>
          </ul>
          <ul>
            <li>Minimum required for active membership= 6 pts</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
