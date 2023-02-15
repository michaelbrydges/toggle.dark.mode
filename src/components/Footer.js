import React from "react";

export default function Footer(props) {

  const darkMode = props.darkStyle

  const darkStyleButton = {
    backgroundColor: darkMode ? "#322B36" : "#FFFFFF",
    boxShadow: darkMode ? "1px 1px 3px #1F1B22" : "2px 2px 5px #CEC4C4",
    color: darkMode ? "#FFFFFF" : "#000000"
  }

  return (  
    <div className="footer--container">
      <span className="footer--text--skip">Skip</span>
      <button style={darkStyleButton}>
        <span class="material-symbols-outlined">arrow_right_alt</span>
      </button>
    </div>
  );
}

