import React, { Component } from 'react';
import '../styles/css/Carousel.css';
import 'font-awesome/css/font-awesome.min.css';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({ activeIndex: index });
  }

  goToPrevSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    index = (index - 1 + this.props.slides.length) % this.props.slides.length;
    this.goToSlide(index)
  }

  goToNextSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    index = (index + 1) % this.props.slides.length;
    this.goToSlide(index)
  }

  render() {
    return (
      <div className="carousel-container">
        <div className="carousel">
          <ul className="carousel__slides">
            {this.props.slides.map((slide, index) =>
              <li
                className={
                  index === this.state.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
                }
                key={index}
              >
                <img src={slide} alt="" />
              </li>
            )}
          </ul>
          <ul className="carousel__indicators">
            {this.props.slides.map((slide, index) =>
              <li key={index}>
                <a
                  className={
                    index === this.state.activeIndex
                      ? "carousel__indicator carousel__indicator--active"
                      : "carousel__indicator"
                  }
                  onClick={e => this.goToSlide(index)}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  slides: ["https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
           "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
           "https://images.unsplash.com/uploads/14135798609283698b7f3/a1364128?auto=format&fit=crop&w=1489&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
           "https://images.unsplash.com/photo-1449087989455-465ae815dbf2?auto=format&fit=crop&w=1347&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"]
}

export default Carousel;
