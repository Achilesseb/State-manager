import "./App.css";
import React from "react";
import PanelComponent from "./PanelComponent/PanelComponent";
import TestComponent from "./PanelComponent/TestCountComponent";
import { store } from "./stateManager/eventBus";
import { incrementCount, decrementCount, reset } from "./stateManager/actions";
import { usePublishHook } from "./stateManager/usePublishHook";
function App() {
  const { dispatch } = store;
  const state = usePublishHook();
  const handleIncrementClick = () => {
    dispatch("counter", state, incrementCount);
  };
  const handleDecrementClick = () => {
    dispatch("counter", state, decrementCount);
  };
  const handleReset = () => {
    dispatch("counter", state, reset);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-container">
          <button onClick={() => handleIncrementClick()}>+</button>
          <span className="app-container-span">
            <span>APP COMPONENT</span>
            <span>
              {" "}
              Count 1 :<span className="counter"> {state.count}</span>
            </span>
          </span>
          <button onClick={() => handleDecrementClick()}>-</button>
        </div>

        <PanelComponent />
        <TestComponent />
        <button className="reset-button" onClick={handleReset}>
          RESET
        </button>
      </header>
    </div>
  );
}

export default App;
