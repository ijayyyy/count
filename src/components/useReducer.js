import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";

const initialCount = { count: 0, input: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    case "setvalue":
      return { ...state, input: action.payload };
    case "updatecount":
      return { count: action.payload };
    default:
      return { count: state.count };
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialCount);
  const updateTheCount = () => {
    dispatch({ type: "updatecount", payload: state.input - `${state.count}` });
  };
  const changeCountValue = (e) => {
    dispatch({ type: "setvalue", payload: e.target.value });
  };
  return (
    <div>
      <h2 className="counter">Count: {state.count}</h2>
      <input
        type="number"
        value={state.input}
        onChange={changeCountValue}
        placeholder="set value"
      />
      <button onClick={updateTheCount}>Enter</button>
      <div className="counter">
        <button className="inc" onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button className="dec" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
      <button className="reset" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
      <div className="back">
        <Link to="/counter">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
export default UseReducer;
