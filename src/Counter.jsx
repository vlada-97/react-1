import "./Counter.css";
import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <div>
        <h2>Счетчик:</h2>
        <h1 className={count === 0 ? "" : count > 0 ? "plus" : "minus"}>
          {count}
        </h1>
        <button className="minus" onClick={handleMinus}>
          - Минус
        </button>
        <button className="plus" onClick={handlePlus}>
          + Плюс
        </button>
      </div>
    </div>
  );
}

export default MyComponent;

