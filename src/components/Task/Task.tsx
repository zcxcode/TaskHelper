import { useContext } from "react";
import { StateContext, TaskItem } from "../../App";
import taskFunctions from "./task-functions";
import "./Task.style.scss";

interface TextProps {
  counter: number;
  task: TaskItem;
  funcs: {
    drag: TaskItem;
    setDrag: Function;
  };
}

const Task = ({ counter, task, funcs }: TextProps) => {
  const { getTodos, setTodos } = useContext(StateContext);
  const { drag, setDrag } = funcs;
  const {
    removeTask,
    changeTaskStatus,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler
  } = taskFunctions(getTodos, setTodos, drag, setDrag);

  return (
    <li
      className="task"
      draggable={true}
      onDragStart={(e) => {
        dragStartHandler(e, task);
      }}
      onDragLeave={(e) => {
        dragEndHandler(e);
      }}
      onDragEnd={(e) => {
        dragEndHandler(e);
      }}
      onDragOver={(e) => {
        dragOverHandler(e);
      }}
      onDrop={(e) => {
        dropHandler(e, task);
      }}
    >
      <div className="task__text">
        <span className="task__number">{counter}.</span>
        <span className={task.done === false ? "task__active" : "task__done"}>
          {task.text}
        </span>
      </div>
      <div className="task__buttons">
        <button
          className="task__delete-button"
          onClick={() => {
            removeTask(task.id);
          }}
        >
          Удалить задачу
        </button>
        <button
          className="task__change-status"
          onClick={() => {
            changeTaskStatus(task.id);
          }}
        >
          Пометить как {task.done === false ? "выполненное" : "невыполненное"}
        </button>
      </div>
    </li>
  );
};

export default Task;
