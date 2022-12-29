import React, { MutableRefObject, useRef, useContext } from "react";
import { StateContext } from "../../App";
import "./Timer.style.scss";

const Timer = () => {
  const [getTimer, setTimer] = useContext(StateContext).timer;
  const input = useRef<HTMLInputElement>(null);
  const interval: MutableRefObject<any> = useRef(null);

  const startTimer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value: string | undefined = input.current?.value;

    value?.match(/\d+/) ? setTimer(+value) : alert("Введите число");

    interval.current = setInterval(() => {
      setTimer((prev: number) => {
        if (prev <= 1) {
          clearInterval(interval.current);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    setTimer(0);
  };

  return (
    <div className="timer">
      <span className="timer__output">
        {(Math.floor(getTimer / 60) + "").length <= 1 ? "0" : ""}
        {Math.floor(getTimer / 60)}:
        {((getTimer % 60) + "").length <= 1 ? "0" : ""}
        {getTimer % 60}
      </span>

      <input className="timer__input" type="number" ref={input} />

      <button className="timer__start" onClick={startTimer}>
        Запустить
      </button>

      <button className="timer__stop" onClick={stopTimer}>
        Остановить
      </button>
    </div>
  );
};

export default Timer;
