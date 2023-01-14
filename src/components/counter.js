import React, { useState } from "react";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = (event) => {
    event.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = (event) => {
    event.preventDefault();
    setCount((prevCount) => prevCount - 1);
  };

  const reset = (event) => {
    event.preventDefault();
    setCount(0);
  };
  const changeValue = (value) => {
    setCount(parseInt(value));
  };

  return (
    <div>
      <div className="counter-container">
        <h1>Count: {count}</h1>
        <input type="number" placeholder="set value" />
        <button
          onClick={(event) => {
            if (event.key === "Enter") {
              changeValue(event.target.value);
            }
          }}
        >
          Enter
        </button>
        <div className="counter">
          <button onClick={increment} className="increment">
            Increment
          </button>
          <button onClick={decrement} className="decrement">
            Decrement
          </button>
        </div>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>

      <Link to="/useReducer">
        <button className="go-to">Go to Counter-2</button>
      </Link>
      <div className="back">
        <Link to="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
}
export default Counter;
