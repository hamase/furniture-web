import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <>
        <label className="switchBox">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>

        {/* <button onClick={toggleTheme}>hh</button>; */}
      </>
    );
  }
}

export default ThemeToggle;
