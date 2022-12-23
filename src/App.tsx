import { createContext, useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import List from "./components/List";

export interface TaskItem {
  text: string;
  done: boolean;
  id: number;
}

// Провайдер функции обновления таск листа
export const StateContext = createContext<any>(null);

function App() {
  // Основной стейт таск листа.
  const [getTodos, setTodos] = useState<TaskItem[]>([]);

  return (
    <div className="App">
      <StateContext.Provider value={{ getTodos, setTodos }}>
        <List list={getTodos} />
        <Button setList={setTodos} />
      </StateContext.Provider>
    </div>
  );
}

export default App;
