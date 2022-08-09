import React from "react";
import { useEffect } from "react";
import { createStore } from "../stateManager/eventBus";
import { globalState, reducer } from "../stateManager/reducer";
import { useState } from "react";
const PanelComponent = ({ store }) => {
  const { getState, subscribe, dispatch } = store;
  const [state, setState] = useState(getState());
  const [newState, setNewState] = useState();
  const callback = (data) => {
    setState(data);
  };
  useEffect(() => {
    console.log("subscribed");
    return subscribe("message", callback);
  }, []);

  const handleClick = (direction) => {
    dispatch("message", state.count, direction);
  };

  return (
    <div>
      <button onClick={() => handleClick("increase")}>+</button>
      <span>{state.count}</span>
      <button onClick={() => handleClick("decrease")}>-</button>
    </div>
  );
};
export default PanelComponent;
