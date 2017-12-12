import React, { Component } from 'react';
import './App.css';
import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Album2017 from './pages/albums/Album2017.js';
import Album2016 from './pages/albums/Album2016.js';
import Album2015 from './pages/albums/Album2015.js';
import Album2014 from './pages/albums/Album2014.js';
import Album2013 from './pages/albums/Album2013.js';
import Album2012 from './pages/albums/Album2012.js';
import Album2011 from './pages/albums/Album2011.js';
import Members from './pages/Members.js';
import Officers from './pages/Officers.js';
import Contact from './pages/Contact.js';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/photos' component={Gallery}/>
      <Route exact path='/members' component={Members}/>
      <Route exact path='/officers' component={Officers}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/photos/2017-2018' component={Album2017}/>
      <Route exact path='/photos/2016-2017' component={Album2016}/>
      <Route exact path='/photos/2015-2016' component={Album2015}/>
      <Route exact path='/photos/2014-2015' component={Album2014}/>
      <Route exact path='/photos/2013-2014' component={Album2013}/>
      <Route exact path='/photos/2012-2013' component={Album2012}/>
      <Route exact path='/photos/2011-2012' component={Album2011}/>
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
      </div>
    )
  }
}

export default App;
