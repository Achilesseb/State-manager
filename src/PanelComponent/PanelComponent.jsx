import React, { useContext } from "react";
import { CounterContext } from "../stateManager/context";
import { useDispatch } from "../stateManager/useDispatch";

const PanelComponent = () => {
  const { state } = useContext(CounterContext);
  const { incrementCount, decrementCount } = useDispatch();
  return (
    <div>
      <button onClick={() => incrementCount()}>+</button>
      <span>{state.count}</span>
      <button onClick={() => decrementCount()}>-</button>
    </div>
  );
};
export default PanelComponent;
