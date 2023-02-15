import React from "react";

export default function Circle(props) {

  const darkMode = props.darkStyle

  const circleGrow = {
    height: darkMode ? "105px" : "20px",
    width: darkMode ? "105px" : "20px",
    backgroundColor: darkMode ? "#251F28" : "#FFFFFF"
  }

  const circleColor = {
    backgroundImage: darkMode ? "linear-gradient(45deg, #826EFF , #87c3FF 75%)" : 
                                       "linear-gradient(45deg, #FB190E , #DA802C 75%)"
  }

  return (
    <>
      <div className="circle--container">
        <div className="circle--light" style={circleColor}></div>
        <div className="circle--dark" style={circleGrow}></div>
      </div>
    </>
  )
}