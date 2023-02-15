import React from "react";

export default function Decoration(props) {

  const darkMode = props.darkStyle

  const darkStyleDot = {
    backgroundColor: darkMode ? "#322B36" : "#E3E3E5"
  }

  const darkStyleLong = {
    backgroundColor: darkMode ? "#FFFFFF" : "#000000"
  }

  return (
    <>
      <div className="decoration--container">
        <div style={darkStyleDot}></div>
        <div id="long" style={darkStyleLong}></div>
        <div style={darkStyleDot}></div>
      </div>
    </>
  )
}