import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const firstGen = [
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/uploads/14135798609283698b7f3/a1364128?auto=format&fit=crop&w=1489&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1449087989455-465ae815dbf2?auto=format&fit=crop&w=1347&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
];

const bigC = [
  "https://images.unsplash.com/uploads/14135798609283698b7f3/a1364128?auto=format&fit=crop&w=1489&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1449087989455-465ae815dbf2?auto=format&fit=crop&w=1347&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
];

const secondGen = [
  "https://images.unsplash.com/photo-1449087989455-465ae815dbf2?auto=format&fit=crop&w=1347&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/uploads/14135798609283698b7f3/a1364128?auto=format&fit=crop&w=1489&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
];

const dogs = [
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/uploads/14135798609283698b7f3/a1364128?auto=format&fit=crop&w=1489&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1449087989455-465ae815dbf2?auto=format&fit=crop&w=1347&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
];


class Album2016 extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">2016 - 2017</div>

        <div class="album__title">First General Meeting</div>
        <Carousel slides={firstGen} showArrows={true} showIndicators={false} />

        <div class="album__title">Big C Hike + Pieology Social</div>
        <Carousel slides={bigC} showArrows={true} showIndicators={false} /> 

        <div class="album__title">2nd General Meeting</div>
        <Carousel slides={secondGen} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Guide Dogs for the Blind Field Trip</div>
        <Carousel slides={dogs} showArrows={true} showIndicators={false} /> 
      </div>
    )
  }
}

export default Album2016;