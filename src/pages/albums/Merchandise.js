import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const Black-Baseball= [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Black Baseball 3-4 Sleeve - $20/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Black Baseball 3-4 Sleeve - $20/2.jpg"
];

const Black-Long-Sleeve = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Black Long Sleeve - $18/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Black Long Sleeve - $18/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Black Long Sleeve - $18/3.jpg"
];

const Gray-Sweats = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Gray Sweats - $20/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Gray Sweats - $20/2.jpg"
];

const Navy-Cap = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/P/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Navy Embroidered Cap $20/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/P/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Navy Embroidered Cap $20/2.jpg"
];

const Pre-Health-shirt= [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Pre-Health Society T-shirt - free/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/Pre-Health Society T-shirt - free/2.jpg"
];

const PVC-sticker= [
  "//Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/PVC Laptop Sticker - $3/1.jpg"
];

const PVC-mug= [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/PVC Mug (white) - $7/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/PVC Mug (white) - $7/2.jpg"
];


class Merchandise extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">Merchandise</div>

        <div class="album__title">Black Baseball 3-4 Sleeve: $20 (S/M)</div>
        <Carousel slides={Black-Baseball} showArrows={true} showIndicators={false} />

        <div class="album__title">Black Long Sleeve: $18 (XS/S/M/L)</div>
        <Carousel slides={Black-Long-Sleeve} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Gray Sweats: $20 (S/M)</div>
        <Carousel slides={Gray-Sweats} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Navy Cap: $20</div>
        <Carousel slides={Navy-Cap} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Pre-Health shirt: FREE (S/M/L)</div>
        <Carousel slides={Pre-Health-shirt} showArrows={true} showIndicators={false} /> 

        <div class="album__title">PVC sticker: $3</div>
        <Carousel slides={PVC-sticker} showArrows={true} showIndicators={false} /> 

        <div class="album__title">PVC mug: $7</div>
        <Carousel slides={PVC-mug} showArrows={true} showIndicators={false} /> 
      </div>
    )
  }
}

export default Merchandise;