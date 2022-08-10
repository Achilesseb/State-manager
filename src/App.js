import "./App.css";
import React, { useEffect, useState } from "react";
import PanelComponent from "./PanelComponent/PanelComponent";
import TestComponent from "./PanelComponent/TestCountComponent";
import { store } from "./stateManager/eventBus";
import { saveToLocalStorage } from "./stateManager/eventBus";
import { incrementCount, decrementCount, reset } from "./stateManager/actions";
import { globalState } from "./stateManager/reducer";
function App() {
  const { getState, subscribe, dispatch } = store;
  const [state, setState] = useState(getState());
  function callback(data) {
    setState(data);
  }
  const localStorageCounter = localStorage.getItem("counter");
  useEffect(() => {
    subscribe("initialState", {
      name: "appComponentInitializeState",
      callback: callback,
    });
    if (localStorageCounter === undefined || localStorageCounter === null)
      dispatch("initialState", globalState);
    else dispatch("initialState", JSON.parse(localStorage.getItem("counter")));
    return subscribe("counter", {
      name: "appComponent",
      callback: callback,
    });
  }, []);
  useEffect(() => {
    return saveToLocalStorage(state);
  });
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
              Count 1 :<span className="counter"> {state?.count}</span>
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
