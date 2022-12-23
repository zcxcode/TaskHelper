import { useContext } from "react";
import { StateContext } from "../../App";
import { TaskItem } from "../../App";
import "./Task.style.scss";

interface TextProps {
  counter: number;
  task: TaskItem;
}

const Task = ({ counter, task }: TextProps) => {
  const deleteButtonText = "Удалить задачу";
  const state = useContext(StateContext);
  const { getTodos, setTodos } = state;

  const removeTask = (id: number) => {
    setTodos(() => getTodos.filter((item: TaskItem) => item.id != id));
  };

  const changeTaskStatus = (id: number) => {
    const modifyTodos = getTodos.map((item: TaskItem) => {
      if (item.id !== id) {
        return item;
      } else {
        return { ...item, done: item.done ? false : true };
      }
    });
    setTodos(modifyTodos);
  };

  return (
    <li className={task.done === false ? "task--active" : "task--done"}>
      <span>
        {counter}. {task.text}
      </span>
      <button
        className="task__delete-button"
        onClick={() => {
          removeTask(task.id);
        }}
      >
        {deleteButtonText}
      </button>
      <button
        className="task__change-status"
        onClick={() => {
          changeTaskStatus(task.id);
        }}
      >
        Пометить как {task.done === false ? "выполненное" : "невыполненное"}
      </button>
    </li>
  );
};

export default Task;
