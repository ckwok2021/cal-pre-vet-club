import React, { Component } from 'react';
import Tabs from "../components/Tabs.js";
import MembersContent from "../content/members/MembersContent.js";
import '../styles/css/Members.css';

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {active: 'aTab'}
  }
  render() {
    return (
      <div>
        <Tabs
          active={this.state.active}
          onChange={active => this.setState({active})}
        >
          <div key="aTab">REQUIRED COURSES</div>
          <div key="bTab">PAID MEMBERS ONLY RESOURCES</div>
          <div key="cTab">TEST BANK</div>
        </Tabs>
        {MembersContent[this.state.active]}
      </div>
    );
  }
}

export default Members;


