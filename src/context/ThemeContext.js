import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component{
    state={
        isLightTheme: true,
        light: {syntax: '#555', ui: '#010103', bg: '#f4f3f8'},
        dark: {syntax: '#ddd', ui: '#f4f3f8', bg: '#010103'}
    }

    render() {
        return(
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider