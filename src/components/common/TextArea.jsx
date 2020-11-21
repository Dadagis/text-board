import React, { useState } from "react";

export default function TextArea(props) {
  const { placeholder, relativeNumber } = props;

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
    <div
      className="draggable"
      data-type={
        placeholder === "Employé"
          ? "left" + relativeNumber
          : "right" + relativeNumber
      }
    >
      <input
        className="text-area"
        type="text"
        placeholder={placeholder}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      />
      <div className={attribute}></div>
    </div>
  );
}
