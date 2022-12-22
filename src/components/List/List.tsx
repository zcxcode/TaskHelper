import Task from "../Task";
import { TaskItem } from "../../App";

interface ListProps {
  list: TaskItem[];
}

const List = ({ list }: ListProps) => {
  let count = 1;

  return (
    <ul className="list">
      {list.map((i) => {
        return <Task counter={count++} task={i} />;
      })}
    </ul>
  );
};

export default List;
