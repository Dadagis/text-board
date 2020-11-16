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

  return (
    <div className="App">
      <div className="App-body">
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
