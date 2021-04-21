import React, { Component } from "react";
import GallerySlider from "../Slider/GallerySlider";

class Footer extends Component {
  render() {
    return (
      <div className="carousel_content">
        <p className="carousel_content-title">Featured</p>
        <div className="carousel_content-list">
          <GallerySlider />
        </div>
      </div>
    );
  }
}

export default Footer;
