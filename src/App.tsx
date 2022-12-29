import { createContext, useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import Timer from "./components/Timer";

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
  // Стейт окна
  const [getSwitcher, setSwitcher] = useState<string>("Task");

  const stateTask = (
    <>
      <List list={getTodos} />
      <Form setList={setTodos} />
    </>
  );

  const stateTimer = (
    <>
      <Timer />
    </>
  )

  return (
    <div className="App">
      <StateContext.Provider
        value={{ getTodos, setTodos, getSwitcher, setSwitcher }}
      >
        <Header />
        <div className="wrapper">{getSwitcher === "Task" ? stateTask : stateTimer}</div>
      </StateContext.Provider>
    </div>
  );
}

export default App;
