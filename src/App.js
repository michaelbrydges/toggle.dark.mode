import React from "react";
import './App.css';
import Circle from "./components/Circle";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";
import Decoration from "./components/Decoration";


export default function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggle() {
    setDarkMode(prevMode => !prevMode)
    //console.log(window.alert(window.innerHeight))
  }

  const darkStyle = {
    backgroundColor: darkMode ? "#251F28" : "#FFFFFF",
    color: darkMode ? "#FFFFFF" : "#000000",
  }

  const darkStyleSlider = {
    transform: darkMode ? "translateX(100%)" : "translateX(0)",
    backgroundColor: darkMode ? "#322B36" : "#FFFFFF",
    boxShadow: darkMode ? "1px 1px 5px #1F1B22" : "2px 2px 5px #CEC4C4",
  }

  const darkStyleSliderContainer = {
    backgroundColor: darkMode ? "#000000" : "#E3E3E5",
  }

  const darkStyleTextDark = {
    color: darkMode ? "#FFFFFF" : "#74717B"
  }

  const darkStyleTextLight = {
    color: darkMode ? "#74717B" : "#000000"
  }
  
  return (  
    <div className="layout--container" style={darkStyle}>
      <div className="main--container">
        <Circle darkStyle={darkMode}/>
        <Instructions darkStyle={darkMode}/>
        <div className="toggle--container" onClick={toggle}>
          <div className="slider--container" style={darkStyleSliderContainer}>
            <div className="slider" style={darkStyleSlider}></div>
          </div>
          <span style={darkStyleTextLight}>Light</span>
          <span style={darkStyleTextDark}>Dark</span>
        </div>
        <Decoration darkStyle={darkMode} />
      </div>
      <Footer darkStyle={darkMode} />
    </div>
  );
}

