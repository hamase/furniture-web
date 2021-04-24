import React, { Component } from "react";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="navbar_content"
        style={{ background: theme.bg, color: theme.text }}
      >
        <div className="navbar_content-mobile">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div
              style={{
                background: theme.menu_color,
              }}
            ></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Forniture</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Store</a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faSearch} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ul className="navbar_content-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Forniture</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
