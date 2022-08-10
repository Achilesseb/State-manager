import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { incrementCount, decrementCount } from "../stateManager/actions";
import { store } from "../stateManager/eventBus";
const PanelComponent = () => {
  const { getState, subscribe, dispatch } = store;
  const [state, setState] = useState(getState());
  const callback = (data) => {
    setState(data);
  };
  useEffect(() => {
    return subscribe("counter", {
      name: "panelComponent",
      callback: callback,
    });
  }, []);

  const handleIncrementClick = () =>
    dispatch("counter", state.count, incrementCount);
  const handleDecrementClick = () =>
    dispatch("counter", state.count, decrementCount);
  return (
    <div>
      <button onClick={() => handleIncrementClick()}>+</button>
      <span>Counter in Panel Component: {state.count}</span>
      <button onClick={() => handleDecrementClick()}>-</button>
    </div>
  );
};
export default PanelComponent;
