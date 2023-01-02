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
  const [getTodos, setTodos] = useContext(StateContext).todos;
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
          title="Удалить задачу"
          onClick={() => {
            removeTask(task.id);
          }}
        >
          &#10060;
        </button>
        <button
          className="task__change-status"
          title="Изменить статус"
          onClick={() => {
            changeTaskStatus(task.id);
          }}
        >
          {task.done === false ? <>&#9989;</> : <>&#10062;</>}
        </button>
      </div>
    </li>
  );
};

export default Task;
