import "./App.css";
import Board from "./components/Board";
import { useEffect } from "react";

import interact from "interactjs";

function App() {
  let translateValues = {
    left1: { x: 0, y: 0 },
    left2: { x: 0, y: 0 },
    left3: { x: 0, y: 0 },
    right1: { x: 0, y: 0 },
    right2: { x: 0, y: 0 },
    right3: { x: 0, y: 0 },
  };

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
          translateValues[event.target.dataset.type].x = position.x;
          translateValues[event.target.dataset.type].y = position.y;
        },
        end() {
          position.x = 0;
          position.y = 0;
        },
      },
    });
  }, []);

  // useEffect(() => {
  //   const array = document.querySelectorAll("[data-type='Employé']");
  //   for (const key in array) {
  //     console.log(key);
  //     if (array.hasOwnProperty(key)) {
  //       const element = array[key];
  //       console.log(element);
  //     }
  //   }
  // });

  const handleClick = ({ target: element }) => {
    if (
      element.parentNode.childNodes[1].className.includes("dot-right") ||
      element.parentNode.childNodes[1].className.includes("dot-left")
    ) {
      console.log(element.parentNode.dataset);
      let value1 = element.parentNode.childNodes[1].getBoundingClientRect().x;
      let value2 =
        element.parentNode.childNodes[1].getBoundingClientRect().width / 2;
      let value3 = window.pageXOffset;
      // console.log(value1 + value2 + value3);
      const xValue = value1 + value2 + value3;
      value1 = element.parentNode.childNodes[1].getBoundingClientRect().y;
      value2 =
        element.parentNode.childNodes[1].getBoundingClientRect().height / 2;
      value3 = window.pageYOffset;
      // console.log(value1 + value2 + value3);
      const yValue = value1 + value2 + value3;
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
      <svg className="svg-arrow">
        <line
          x1="532"
          y1="223"
          x2="908"
          y2="223"
          stroke="black"
          strokeWidth="2"
        ></line>
      </svg>
    </div>
  );
}

export default App;
