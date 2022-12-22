import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import List from "./components/List";

export interface TaskItem {
  text: string,
  done: boolean,
  id: number
}

function App() {
  // Основной стейт таск листа.
  const [getTodos, setTodos] = useState<TaskItem[]>([]);

  return (
    <div className="App">
      <List list={getTodos} />
      <Button setList={setTodos}/>
    </div>
  );
}

export default App;
