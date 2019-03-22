import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const Fundraiser = [
  "../images/2015-2016/Fundraiser/1.jpg",
  "../images/2015-2016/Fundraiser/2.jpg",
  "../images/2015-2016/Fundraiser/3.jpg",
  "../images/2015-2016/Fundraiser/4.jpg",
  "../images/2015-2016/Fundraiser/5.jpg",
  "../images/2015-2016/Fundraiser/6.jpg",
  "../images/2015-2016/Fundraiser/7.jpg",
  "../images/2015-2016/Fundraiser/8.jpg",
  "../images/2015-2016/Fundraiser/9.jpg",
  "../images/2015-2016/Fundraiser/10.jpg",
  "../images/2015-2016/Fundraiser/11.jpg",
  "../images/2015-2016/Fundraiser/12.jpg",
  "../images/2015-2016/Fundraiser/13.jpg",
  "../images/2015-2016/Fundraiser/14.jpg",
  "../images/2015-2016/Fundraiser/15.jpg",
  "../images/2015-2016/Fundraiser/16.jpg",
  "../images/2015-2016/Fundraiser/17.jpg",
  "../images/2015-2016/Fundraiser/18.jpg",
  "../images/2015-2016/Fundraiser/19.jpg"
];

const GM = [
  "../images/2015-2016/GM/1.jpg",
  "../images/2015-2016/GM/2.jpg",
  "../images/2015-2016/GM/3.jpg",
  "../images/2015-2016/GM/4.jpg",
  "../images/2015-2016/GM/5.jpg",
  "../images/2015-2016/GM/6.jpg",
  "../images/2015-2016/GM/7.jpg",
  "../images/2015-2016/GM/8.jpg",
  "../images/2015-2016/GM/9.jpg",
  "../images/2015-2016/GM/10.jpg",
  "../images/2015-2016/GM/11.jpg",
  "../images/2015-2016/GM/12.jpg",
  "../images/2015-2016/GM/13.jpg",
  "../images/2015-2016/GM/14.jpg",
  "../images/2015-2016/GM/15.jpg",
  "../images/2015-2016/GM/16.jpg",
  "../images/2015-2016/GM/17.jpg",
  "../images/2015-2016/GM/18.jpg",
  "../images/2015-2016/GM/19.jpg",
  "../images/2015-2016/GM/20.jpg"
];

const Social = [
  "../images/2015-2016/Social/1.jpg",
  "../images/2015-2016/Social/2.jpg",
  "../images/2015-2016/Social/3.jpg",
  "../images/2015-2016/Social/4.jpg",
  "../images/2015-2016/Social/5.jpg",
  "../images/2015-2016/Social/6.jpg",
  "../images/2015-2016/Social/7.jpg",
  "../images/2015-2016/Social/8.jpg",
  "../images/2015-2016/Social/9.jpg"
];


class Album2015 extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">2015 - 2016</div>

        <div class="album__title">Fundraiser</div>
        <Carousel slides={Fundraiser} showArrows={true} showIndicators={false} />

        <div class="album__title">GM</div>
        <Carousel slides={GM} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Social</div>
        <Carousel slides={Social} showArrows={true} showIndicators={false} /> 
      </div>
    )
  }
}

export default Album2015;