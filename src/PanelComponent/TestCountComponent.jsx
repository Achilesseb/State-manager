import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { store } from "../stateManager/eventBus";
const TestComponent = () => {
  const { getState, subscribe } = store;
  const [state, setState] = useState(getState());
  const callback = (data) => {
    setState(data);
  };
  useEffect(() => {
    return subscribe("counter", { name: "testComponent", callback: callback });
  }, []);
  return <div>Counter in Test Component: {state.count}</div>;
};
export default TestComponent;
