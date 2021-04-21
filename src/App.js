import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/Main/MainContent";
import Footer from "./components/Footer/Footer";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="main_app">
      <ThemeContextProvider>
        <Navbar />
        <MainContent />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
