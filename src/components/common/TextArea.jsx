import React from "react";

export default function TextArea(props) {
  const { placeholder } = props;

  return (
    <div>
      <input className="text-area" type="text" placeholder={placeholder} />
    </div>
  );
}
