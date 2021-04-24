import React, { Component } from "react";
import Chair from "../../assets/img/armchairGreen.png";
import { ThemeContext } from "../../context/ThemeContext";

class MainContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="main_content"
        style={{ background: theme.bg, color: theme.text }}
      >
        {/* title main page */}
        <div className="main_content-title">
          <h4>Modern minimal furniture.</h4>
          <p>
            Shop Furniture online for great prices, stylish furnishings <br />
            and home decor. Free shipping on many items!
          </p>
          {/* <input type="button" value="explore" /> */}
          <button
            style={{ background: theme.button_bg, color: theme.button_color }}
          >
            explore
          </button>
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
