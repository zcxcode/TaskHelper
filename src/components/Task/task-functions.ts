import { TaskItem } from "../../App";

const taskFunctions = (
  getTodos: TaskItem[],
  setTodos: Function,
  drag: TaskItem,
  setDrag: Function
) => {
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
  ) => {
    setDrag(task);
  };

  const dragEndHandler = (e: React.DragEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".task")) {
      const task = target.closest(".task") as HTMLElement;
      task.style.boxShadow = "none";
    }
  };

  const dragOverHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.closest(".task")) {
      const task = target.closest(".task") as HTMLElement;
      task.style.boxShadow = "0 0 5px 5px var(--color-gray)";
    }
  };

  const dropHandler = (e: React.DragEvent<HTMLLIElement>, task: TaskItem) => {
    e.preventDefault();
    const todos = [...getTodos];
    const lastIndex = todos.indexOf(drag);
    const newIndex = todos.indexOf(task);
    todos[lastIndex] = task;
    todos[newIndex] = drag;
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((item) => ((item as HTMLElement).style.boxShadow = "none"));
    setTodos(todos);
  };

  return {
    removeTask,
    changeTaskStatus,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler
  };
};

export default taskFunctions;
