import { createContext, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import TaskPage from "./Pages/TaskPage";
import TimerPage from "./Pages/TimerPage";

export interface TaskItem {
  text: string;
  done: boolean;
  id: number;
}

// Провайдер функции обновления таск листа
export const StateContext = createContext<any>(null);

function App() {
  // Стейт таск листа.
  const [getTodos, setTodos] = useState<TaskItem[]>([]);
  // Стейт таймера.
  const [getTimer, setTimer] = useState<number>(0);
  // Стейт окна
  const [getSwitcher, setSwitcher] = useState<string>("Task");

  // Функция переключения окна
  const switchWindow = (url: string) => {
    switch (url) {
      case "Task":
        return <TaskPage />;
        break;
      case "Timer":
        return <TimerPage />;
        break;
    }
  };

  // Объект пропсов
  const props = {
    todos: [getTodos, setTodos],
    timer: [getTimer, setTimer],
    switcher: [getSwitcher, setSwitcher]
  };

  return (
    <div className="App">
      <StateContext.Provider value={props}>
        <Header />
        <div className="wrapper">{switchWindow(getSwitcher)}</div>
      </StateContext.Provider>
    </div>
  );
}

export default App;
