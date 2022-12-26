import React, { useState } from "react";
import "./Form.style.scss";

interface ButtonProps {
  setList: Function;
}

const Form = ({ setList }: ButtonProps) => {
  // State для инпута
  const [input, setInput] = useState("");

  // Обработчик события инпута. Добавление в стейт
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  // Добавление задачи и очистка инпута.
  const addTask = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const errormsg: string = "Введите текст задачи";

    if (!input) {
      alert(errormsg);
    } else {
      const newTask = {
        text: input,
        done: false,
        id: Math.random()
      };
      setList((prev: string[]) => [...prev, newTask]);
      setInput("");
    }
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input className="form__input" onChange={changeInput} value={input} />
      <button className="form__button" onClick={addTask}>
        Добавить задачу
      </button>
    </form>
  );
};

export default Form;
