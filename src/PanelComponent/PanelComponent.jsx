import React from "react";
import { usePublishHook } from "../stateManager/usePublishHook";
const PanelComponent = () => {
  const state = usePublishHook();
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
