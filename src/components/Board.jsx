import React from "react";
import "../style/board.css";
import BoardHeader from "./common/BoardHeader";

export default function Board(props) {
  const { headerTitle, backgroundColor } = props;
  console.log(headerTitle);

  return (
    <div className="board">
      <BoardHeader
        headerTitle={headerTitle}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}
