import React from "react";
import "../style/board.css";
import BoardHeader from "./common/BoardHeader";
import TextArea from "./common/TextArea";

export default function Board(props) {
  const { headerTitle, backgroundColor, textAreaPlaceholder } = props;
  console.log(headerTitle);

  return (
    <div className="board">
      <BoardHeader
        headerTitle={headerTitle}
        backgroundColor={backgroundColor}
      />
      <div className="board-body">
        <TextArea placeholder={textAreaPlaceholder} />
        <TextArea placeholder={textAreaPlaceholder} />
        <TextArea placeholder={textAreaPlaceholder} />
      </div>
    </div>
  );
}
