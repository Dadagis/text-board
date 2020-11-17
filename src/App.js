import "./App.css";
import Board from "./components/Board";
import { useEffect } from "react";

import interact from "interactjs";

function App() {
  useEffect(() => {
    const position = { x: 0, y: 0 };

    interact(".draggable").draggable({
      listeners: {
        start(event) {
          console.log(event.type, event.target);
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
        end() {
          position.x = 0;
          position.y = 0;
        },
      },
    });
  }, []);

  const handleClick = ({ target: element }) => {
    if (
      element.parentNode.childNodes[1].className.includes("dot-right") ||
      element.parentNode.childNodes[1].className.includes("dot-left")
    ) {
      // console.log(element.parentNode.childNodes[1].getBoundingClientRect().x);
      let ah = element.parentNode.childNodes[1].getBoundingClientRect().x;
      let beh =
        element.parentNode.childNodes[1].getBoundingClientRect().width / 2;
      let ceh = window.pageXOffset;
      console.log(ah + beh + ceh);
      ah = element.parentNode.childNodes[1].getBoundingClientRect().y;
      beh = element.parentNode.childNodes[1].getBoundingClientRect().height / 2;
      ceh = window.pageYOffset;
      console.log(ah + beh + ceh);
    }
  };

  return (
    <div className="App">
      <div className="App-body" onClick={handleClick}>
        <Board
          headerTitle="Employés"
          backgroundColor="#ABDAE1"
          textAreaPlaceholder="Employé"
        />
        <Board
          headerTitle="Tâches"
          backgroundColor="#F6658E"
          textAreaPlaceholder="Tâche"
        />
      </div>
    </div>
  );
}

export default App;
