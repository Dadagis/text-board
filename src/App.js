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

  let pair = [];

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
          let value1 = event.target.childNodes[1].getBoundingClientRect().x;
          let value2 =
            event.target.childNodes[1].getBoundingClientRect().width / 2;
          let value3 = window.pageXOffset;
          const xValue = value1 + value2 + value3;
          value1 = event.target.childNodes[1].getBoundingClientRect().y;
          value2 =
            event.target.childNodes[1].getBoundingClientRect().height / 2;
          value3 = window.pageYOffset;
          const yValue = value1 + value2 + value3;

          translateValues[event.target.dataset.type].x = xValue;
          translateValues[event.target.dataset.type].y = yValue;

          updateSvg(event, translateValues);
        },
        end() {
          position.x = 0;
          position.y = 0;
        },
      },
    });
  }, []);

  const handleClick = ({ target: element }) => {
    if (element.parentNode.childNodes[1].className.includes("dot-right")) {
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
      translateValues[element.parentNode.dataset.type].x = xValue;
      translateValues[element.parentNode.dataset.type].y = yValue;
      console.log("translate values updated handle click");

      if (pair.length > 0) {
        pair[0].includes("left") ? (pair = []) : (pair = pair);
        pair.push(element.parentNode.dataset.type);
      } else {
        pair.push(element.parentNode.dataset.type);
      }
      if (pair.length === 2) {
        drawSvg(pair, translateValues);
      }
    } else if (
      element.parentNode.childNodes[1].className.includes("dot-left")
    ) {
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
      translateValues[element.parentNode.dataset.type].x = xValue;
      translateValues[element.parentNode.dataset.type].y = yValue;
      console.log("translate values updated handle click");

      if (pair.length > 0) {
        pair[0].includes("right") ? (pair = []) : (pair = pair);
        pair.push(element.parentNode.dataset.type);
      } else {
        pair.push(element.parentNode.dataset.type);
      }
      if (pair.length === 2) {
        drawSvg(pair, translateValues);
      }
    }
  };

  const drawSvg = (pair, translateValues) => {
    const app = document.querySelector(".App");
    return app.insertAdjacentHTML(
      "beforeend",
      `<svg class="svg-arrow"><line class="${pair[0]} ${pair[1]}" x1=${
        translateValues[pair[0]].x
      } y1=${translateValues[pair[0]].y} x2=${translateValues[pair[1]].x} y2=${
        translateValues[pair[1]].y
      } stroke="black" stroke-width="2"></line></svg>`
    );
  };

  const updateSvg = ({ currentTarget: element }, translateValues) => {
    const arrows = document.querySelectorAll(`.${element.dataset.type}`);
    if (element.dataset.type.includes("left")) {
      arrows.forEach((arrow) => {
        arrow.setAttribute("x1", translateValues[element.dataset.type].x);
        arrow.setAttribute("y1", translateValues[element.dataset.type].y);
      });
    } else {
      arrows.forEach((arrow) => {
        arrow.setAttribute("x2", translateValues[element.dataset.type].x);
        arrow.setAttribute("y2", translateValues[element.dataset.type].y);
      });
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
