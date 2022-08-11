import React from "react";
import { usePublishHook } from "../stateManager/usePublishHook";
import { generateRandomnId } from "../stateManager/eventBus";
const PanelComponent = () => {
  const state = usePublishHook(generateRandomnId());
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
