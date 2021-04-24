import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      bg: "#f4f3f8",
      text: "#000000",
      menu_color: "#000000",
      button_bg: "#000000",
      button_color: "#f4f3f8",
    },
    dark: {
      bg: "#000000",
      text: "#f4f3f8",
      menu_color: "#f4f3f8",
      button_bg: "#f4f3f8",
      button_color: "#000000",
    },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
