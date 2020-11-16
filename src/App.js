import "./App.css";
import Board from "./components/Board";

import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {
    console.log("bonjour");
  };

  return (
    <div className="App">
      <div className="App-body">
        <DragDropContext>
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
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
