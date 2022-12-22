import React, { useState } from "react";

interface ButtonProps {
  setList: Function;
}

const Button = ({ setList }: ButtonProps) => {
  // State для инпута
  const [input, setInput] = useState("");
  // Текст для кнопки ввода
  const buttonText: string = "Добавить задачу";

  // Обработчик события инпута. Добавление в стейт
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  // Обработчик события клика. Передача в setListи очистка инпута
  const clickButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const newTask = {
      text: input,
      done: false,
      id: Math.random()
    };
    setList((prev: string[]) => [...prev, newTask]);
    setInput("");
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input className="input" onChange={changeInput} value={input} />
      <button className="button" onClick={clickButton}>
        {buttonText}
      </button>
    </form>
  );
};

export default Button;
