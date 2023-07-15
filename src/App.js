import clsx from "clsx";
import "./App.scss";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [object, setObject] = useState("square");

  const extraClass = clsx(
    "Wrapper__Square",
    color == "red" && "Wrapper__Square_red",
    object == "circle" && "Wrapper__Square_circle"
  );
  return (
    <div className="Wrapper">
      <div className={extraClass}></div>
      <button className="Wrapper__redButton" onClick={() => setColor("red")}>
        Красный
      </button>
      <button className="Wrapper__blueButton">Синий</button>
      <button
        className="Wrapper__CircleButton"
        onClick={() => setObject("circle")}
      >
        Круг
      </button>
      <button className="Wrapper__SquareButton">Квадрат</button>
      <button
        className="Wrapper__FoldButton"
        onClick={() => {
          setObject("square");
          setColor("");
        }}
      >
        Сброс
      </button>
    </div>
  );
}

export default App;
