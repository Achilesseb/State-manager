import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { store } from "../stateManager/eventBus";
import { incrementCount2, decrementCount2 } from "../stateManager/actions";
const TestComponent = () => {
  const { getState, subscribe, dispatch } = store;
  const [state, setState] = useState(getState());
  const callback = (data) => {
    setState(data);
  };
  useEffect(() => {
    subscribe("initialState", {
      name: "appComponentInitializeState",
      callback: callback,
    });
    return subscribe("counter", { name: "testComponent", callback: callback });
  }, []);
  const handleIncrementClick2 = () => {
    dispatch("counter", state, incrementCount2);
  };
  const handleDecrementClick2 = () => {
    dispatch("counter", state, decrementCount2);
  };

  return (
    <div className="app-container">
      <button onClick={() => handleIncrementClick2()}>+</button>
      <span className="app-container-span">
        <span>TEST COMPONENT</span>
        <span>
          {" "}
          Count 2 :<span className="counter"> {state.count2}</span>
        </span>
      </span>
      <button onClick={() => handleDecrementClick2()}>-</button>
    </div>
  );
};
export default TestComponent;
