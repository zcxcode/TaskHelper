import { useContext } from "react";
import { StateContext, TaskItem } from "../../App";
import "./Task.style.scss";

interface TextProps {
  counter: number;
  task: TaskItem;
}

const Task = ({ counter, task }: TextProps) => {
  const deleteButtonText = "Удалить задачу";
  const { getTodos, setTodos } = useContext(StateContext);

  const removeTask = (id: number) => {
    setTodos(() => getTodos.filter((item: TaskItem) => item.id !== id));
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

  const dragStartHandler = (
    e: React.DragEvent<HTMLLIElement>,
    task: TaskItem
  ) => {};

  const dragEndHandler = (e: React.DragEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".task")) {
      const parent = target.closest(".task") as HTMLElement;
      parent.style.border = "none";
    }
  };

  const dragOverHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.closest(".task")) {
      const parent = target.closest(".task") as HTMLElement;
      parent.style.border = "1px solid white";
    }
  };
  
  const dropHandler = (e: React.DragEvent<HTMLLIElement>, task: TaskItem) => {
    e.preventDefault();
  };

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
      </div>
    </li>
  );
};

export default Task;
