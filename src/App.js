import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/Main/MainContent";
import Footer from "./components/Footer/Footer";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeToggle />
        <Navbar />
        <MainContent />
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
