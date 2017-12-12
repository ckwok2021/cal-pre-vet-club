import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import homeContent from '../content/HomeContent';
import '../styles/css/Home.css';

class Home extends Component {
  mapToLi = (items) => {
    return items.map((item) =>
      <li>{item}</li>
    )
  }

  render() {
    return (
      <div className='home-container'>
        <h2>Cal Pre-Vet Club</h2>
        <Carousel showArrows={false} showIndicators={true} />
        <div className="home-section">
          <h3>Mission</h3>
          <p>{homeContent.mission}</p>
          <ul>{this.mapToLi(homeContent.missionList)}</ul>
        </div>
        <div className="home-section">
          <h3>Why Cal PVC</h3>
          <p>{homeContent.whyPVC}</p>
        </div>
        <div className="home-section prospective-section">
          <h2>Prospective Members</h2>
          <h3>Interested in Veterinary Sciences?</h3>
          <p>{homeContent.interested}</p>
          <ul>{this.mapToLi(homeContent.interestedList)}</ul>
        </div>
        <div className="home-section prospective-section">
          <h3>Active Membership</h3>
          <h4>Benefits</h4>
          <ul>{this.mapToLi(homeContent.benefitsList)}</ul>
          <h4>Requirements</h4>
          <ul>
            <li>{homeContent.requirementsList[0]}</li>
            <ul>{this.mapToLi(homeContent.subRequirementsList)}</ul>
            {this.mapToLi(homeContent.requirementsList.slice(1))}
          </ul>
        </div>

      </div>
    );
  }
}

export default Home;
