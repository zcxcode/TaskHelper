import { TaskItem } from "../../App";

interface TextProps {
  counter: number;
  task: TaskItem;
}

const Task = ({ counter, task }: TextProps) => {
  const deleteButtonText = "Удалить задачу";

  return (
    <li className={task.done === false ? "task--active" : "task--done"}>
      <span>{counter}. {task.text}</span>
      <button className="task__delete-button">{deleteButtonText}</button>
    </li>
  );
};

export default Task;
