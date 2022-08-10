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
    <div>
      <span>
        Panel Component
        <span>
          Count_1 : {state.count} ; Count_2 : {state.count2}
        </span>
      </span>
    </div>
  );
};
export default PanelComponent;
