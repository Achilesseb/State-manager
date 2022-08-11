import React from "react";
import { store, generateRandomnId } from "../stateManager/eventBus";
import { incrementCount2, decrementCount2 } from "../stateManager/actions";
import { usePublishHook } from "../stateManager/usePublishHook";
const TestComponent = () => {
  const { dispatch } = store;
  const state = usePublishHook(generateRandomnId());
  const handleIncrementClick2 = () => {
    dispatch("counter", state, incrementCount2);
  };
  const handleDecrementClick2 = () => {
    dispatch("counter", state, decrementCount2);
  };

  return (
    <div className="app-container">
      <button onClick={handleIncrementClick2}>+</button>
      <span className="app-container-span">
        <span>TEST COMPONENT</span>
        <span>
          {" "}
          Count 2 :<span className="counter"> {state.count2}</span>
        </span>
      </span>
      <button onClick={handleDecrementClick2}>-</button>
    </div>
  );
};
export default TestComponent;
