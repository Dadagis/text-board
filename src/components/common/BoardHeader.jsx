import React from "react";

export default function BoardHeader(props) {
  const { headerTitle, backgroundColor } = props;

  const style = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="board-header" style={style}>
      <h1 className="header-title">{headerTitle}</h1>
    </div>
  );
}
