import React, { Component } from 'react';
import Grid from '../components/Grid.js';
import Modal from '../components/Modal.js';
import Disclaimer from '../components/Disclaimer';
import '../styles/css/Gallery.css';

const items = [
  { name: 'Merchandise', url: require("../images/Merchandise/PVC Mug (white) - $7/2.jpg")},
  { name: '2018-2019', url: require("../images/2018-2019/Suture-Workshop/4.jpg")},
  { name: '2017-2018', url: require("../images/2017-2018/GM/6.jpg")},
  { name: '2016-2017', url: require("../images/2016-2017/Other/1.jpg")},
  { name: '2015-2016', url: require("../images/2015-2016/Fundraiser/1.jpg")}, 
  { name: '2014-2015', url: require("../images/2014-2015/Social/6.jpg")}, 
];



class Gallery extends Component {
  constructor(props) {
      super(props);

      this.state = { 
        isOpen: false,
        isPhotoClicked: false,
        currPhoto: null
      };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  callback = (isClicked, photoSrc) => {
    this.setState({ 
      isPhotoClicked: isClicked,
      currPhoto: photoSrc 
    });
  }

  render() {
    return(
      <div className="gallery">
        <div className="title">Photo Gallery</div>
        <Grid className="album__grid" callbackFromParent={ this.callback } urls={ items } />
        <Disclaimer />
      </div>
    )
  }
}

export default Gallery;
