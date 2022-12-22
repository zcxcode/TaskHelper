import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  // Основной стейт таск листа.
  const [getTodos, setTodos] = useState<string[]>([]);

  console.log(getTodos);

  return (
    <div className="App">
      <List />
      <Button setList={setTodos}/>
    </div>
  );
}

export default App;
