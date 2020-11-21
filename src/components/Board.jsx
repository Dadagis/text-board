import React from "react";
import "../style/board.css";
import BoardHeader from "./common/BoardHeader";
import TextArea from "./common/TextArea";

export default function Board(props) {
  const { headerTitle, backgroundColor, textAreaPlaceholder } = props;

  return (
    <div className="board">
      <BoardHeader
        headerTitle={headerTitle}
        backgroundColor={backgroundColor}
      />
      <div className="board-body">
        <TextArea relativeNumber={1} placeholder={textAreaPlaceholder} />
        <TextArea relativeNumber={2} placeholder={textAreaPlaceholder} />
        <TextArea relativeNumber={3} placeholder={textAreaPlaceholder} />
      </div>
    </div>
  );
}
