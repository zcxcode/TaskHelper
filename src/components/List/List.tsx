import Task from "../Task";
import { TaskItem } from "../../App";
import "./List.style.scss";

interface ListProps {
  list: TaskItem[];
}

const List = ({ list }: ListProps) => {
  let count = 1;
  
  const arr = list.map((i) => {
    return <Task key={i.id} counter={count++} task={i} />;
  })
  
  return (
    <ul className="list">
      {arr.length < 1 ? <span className="list__empty">Заданий нет!</span> : arr}
    </ul>
  );
};

export default List;
