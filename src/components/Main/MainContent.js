import React, { Component } from "react";
import Chair from "../../assets/img/armchairGreen.png";

class MainContent extends Component {
  render() {
    return (
      <div className="main_content">
        {/* title main page */}
        <div className="main_content-title">
          <h4>Modern minimal furniture.</h4>
          <p>
            Shop Furniture online for great prices, stylish furnishings <br />
            and home decor. Free shipping on many items!
          </p>
          {/* <input type="button" value="explore" /> */}
          <button>explore</button>
        </div>
        {/* chair image */}
        <div className="main_content-img">
          <img src={Chair} alt="chair of main page" />
        </div>
      </div>
    );
  }
}

export default MainContent;
