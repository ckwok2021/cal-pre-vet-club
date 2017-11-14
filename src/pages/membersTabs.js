import React, { Component } from 'react';
import Tabs from "../Tabs.js";
import logo from '../logo.svg';
import Search from '../search.js';
import content from "../components/content.js";


class membersTab extends Component {
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
        {content[this.state.active]}
      </div>
    );
  }
}

export default membersTab;
