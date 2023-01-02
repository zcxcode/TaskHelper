import { useContext } from "react";
import { StateContext } from "../../App";
import List from "../../components/List";
import Form from "../../components/Form/Form";

const TaskPage = () => {
  const [getTodos, setTodos] = useContext(StateContext).todos;
  
  return (
    <div className="todo__container" style={{ paddingTop: "30px" }}>
      <List list={getTodos} />
      <Form setList={setTodos} />
    </div>
  );
};

export default TaskPage;
