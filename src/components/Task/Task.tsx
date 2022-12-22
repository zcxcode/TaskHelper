import { TaskItem } from "../../App";

interface TextProps {
  counter: number;
  task: TaskItem;
}

const Task = ({ counter, task }: TextProps) => {
  return (
    <li className={task.done === false ? "InProgress" : "Done"}>
      {counter}. {task.text}
    </li>
  );
};

export default Task;
