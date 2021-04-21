import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Bar1 from "../../assets/img/bar-1.jpg";
import Chair1 from "../../assets/img/chair-1.jpg";
import Office1 from "../../assets/img/office-1.jpg";

const GallerySlider = () => {
  return (
    <Carousel showArrows showThumbs={false} autoPlay={false} showStatus={false}>
      {/* three items in every li */}
      <div>
        <a href="#" className="slide_item">
          <img src={Bar1} alt="" />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
        <a href="#" className="slide_item">
          <img src={Chair1} alt="" />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
        <a href="#" className="slide_item">
          <img src={Office1} alt="" />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
      </div>

      {/* three items in every li */}
      <div>
        <a href="#" className="slide_item">
          <img src={Bar1} />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
        <a href="#" className="slide_item">
          <img src={Chair1} />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
        <a href="#" className="slide_item">
          <img src={Office1} />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
      </div>

      {/* three items in every li */}
      <div>
        <a href="#" className="slide_item">
          <img src={Bar1} />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
        <a href="#" className="slide_item">
          <img src={Chair1} />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
        <a href="#" className="slide_item">
          <img src={Office1} />
          <div className="desc_box">
            <p>Bruno Crush</p>
            <p>$160.00</p>
          </div>
        </a>
      </div>
    </Carousel>
  );
};

export default GallerySlider;

// class CarouselPage extends Component {
// render() {

//   return (

// <Slider {...settings}>
//   <div className="carousel_content-items_list_child">
// <img src={Bar1} alt="" />
// <div>
//   <p>Bruno Crush</p>
//   <p>$160.00</p>
// </div>
//   </div>

//   <div className="carousel_content-items_list_child">
//     <img src={Chair1} alt="" />
//     <div>
//       <p>Chair</p>
//       <p>$120.00</p>
//     </div>
//   </div>

//   <div className="carousel_content-items_list_child">
//     <img src={Office1} alt="" />
//     <div>
//       <p>Office</p>
//       <p>$220.00</p>
//     </div>
//   </div>

//   <div className="carousel_content-items_list_child">
//     <img src={Bar1} alt="" />
//     <div>
//       <p>Bruno Crush</p>
//       <p>$160.00</p>
//     </div>
//   </div>

//   <div className="carousel_content-items_list_child">
//     <img src={Chair1} alt="" />
//     <div>
//       <p>Chair</p>
//       <p>$120.00</p>
//     </div>
//   </div>

//   <div className="carousel_content-items_list_child">
//     <img src={Office1} alt="" />
//     <div>
//       <p>Office</p>
//       <p>$220.00</p>
//     </div>
//   </div>
// </Slider>
//     );
//   }
// }

// export default CarouselPage;
