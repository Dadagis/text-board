import "./App.css";
import Board from "./components/Board";

function App() {
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
