import React, { Component } from 'react';
import '../styles/css/Officers.css';

const squareUrl = "https://lh5.googleusercontent.com/l-0qqsMGKxtf81LgEdJBCvP3RWxBJ7RVDKhIk2usvXHdzlA0sAK2AaZDtVASTS22mZcP6byAgf1BK8hvJ2Narg_5LOXqqMcTWtyUhHZaY4i7LaVuu0Kvb9KdLEqjflaQtmfdfI7Y";

class Officer extends Component {
  render() {
    return (
      <div className={"officer " + (this.state.expanded ? "officer--expanded" : "")}>
        <div className={"officer__img-container officer__img-container--" + this.props.ordering} ref="imgContainer">
          <img src={squareUrl} alt="" />
        </div>
        <div className={"officer__body-container officer__body-container--" + this.props.ordering} ref="bodyContainer">
          <div className="body">
            <p className="body__title">{this.props.officer.name} - {this.props.officer.position}</p>
            <p className="body__sub-title">{this.props.officer.year} - {this.props.officer.major}</p>
            <div className="body__text">
              {this.props.officer.bio}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Officer;
