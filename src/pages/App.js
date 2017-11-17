import React, { Component } from 'react';
import Home from './Home';
import homeContent from '../content/HomeContent';
import '../styles/css/index.css';

// A base file for all your pages to come together.

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home content={homeContent} />
      </div>
    );
  }
}

export default App;
