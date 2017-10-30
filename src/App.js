import React, { Component } from 'react';
import Tabs from "./Tabs.js";
import Title from "./title.js";
import Par from "./paragraph.js";
import logo from './logo.svg';
import Search from './search.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {active: 'aTab'}
  }
  render() {
    const content = {
      aTab: <div>
              <Title name = 'REQUIRED COURSES'>
              </Title>
              <Par
                content = 'You’re at Cal and you want to go to vet school,
                so what do you do?  You obviously have a university full
                of courses to help you on your journey, but which courses
                should you take and when should you take them?
                Regardless of your major (you can have literally any major,
                and still go to vet school) there are certain
                “prerequisite” courses that you need to complete upon
                getting accepted into a vet school. Each school has
                different prerequisite courses, and they can change from
                year to year, so you should always check with your specific
                school.'>
                </Par>
              </div>,
      bTab: <Title name = 'PAID MEMBERS ONLY RESOURCES'>
            </Title>,
      cTab: <div>
              <Title name = 'TEST BANK'>
              </Title>
            </div>,
    };
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
        <p>{content[this.state.active]}</p>
      </div>
    );
  }
}

export default App;
