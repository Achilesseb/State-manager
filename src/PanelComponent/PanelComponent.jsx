import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { store } from "../stateManager/eventBus";
const PanelComponent = () => {
  const { getState, subscribe } = store;
  const [state, setState] = useState(getState());
  const callback = (data) => {
    setState(data);
  };
  useEffect(() => {
    subscribe("initialState", {
      name: "appComponentInitializeState",
      callback: callback,
    });
    return subscribe("counter", {
      name: "panelComponent",
      callback: callback,
    });
  }, []);

  return (
    <div className="app-container">
      <span className="app-container-span">
        <span>PANEL COMPONENT</span>
        <span>
          Count 1 : <span className="counter"> {state.count}</span>
        </span>
        <span>
          Count 2 : <span className="counter"> {state.count2}</span>
        </span>
      </span>
    </div>
  );
};
export default PanelComponent;
