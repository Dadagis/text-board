import React, { useState } from "react";

export default function TextArea(props) {
  const { placeholder } = props;

  // Default value for state
  const defaultSettings =
    placeholder === "Employé" ? "dot-right hidden" : "dot-left hidden";

  // state
  const [attribute, setAttribute] = useState(defaultSettings);

  // Remove hidden when hover an input
  const onMouseEnter = () => {
    setAttribute(placeholder === "Employé" ? "dot-right" : "dot-left");
  };

  // Write hidden when exit an input
  const onMouseOut = () => {
    setAttribute(
      placeholder === "Employé" ? "dot-right hidden" : "dot-left hidden"
    );
  };

  return (
    <div className="draggable">
      <input
        className="text-area"
        type="text"
        placeholder={placeholder}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      />
      <div className={attribute}></div>
      <svg className="svg-arrow" style={{ width: 100, height: 100 }}>
        <line
          x1="20"
          y1="100"
          x2="100"
          y2="20"
          stroke="black"
          strokeWidth="2"
        ></line>
      </svg>
    </div>
  );
}
