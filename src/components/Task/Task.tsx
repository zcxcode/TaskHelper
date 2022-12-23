import { useContext } from "react";
import { StateContext } from "../../App";
import { TaskItem } from "../../App";

interface TextProps {
  counter: number;
  task: TaskItem;
}

const Task = ({ counter, task }: TextProps) => {
  const deleteButtonText = "Удалить задачу";
  const state = useContext(StateContext);

  const removeTask = (id: number) => {
    const { getTodos, setTodos } = state;
    setTodos(() => getTodos.filter((item: TaskItem) => item.id != id));
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
    </li>
  );
};

export default Task;
