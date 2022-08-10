import "./App.css";
import React, { useEffect, useState } from "react";
import PanelComponent from "./PanelComponent/PanelComponent";
import TestComponent from "./PanelComponent/TestCountComponent";
import { store } from "./stateManager/eventBus";
import { incrementCount, decrementCount, reset } from "./stateManager/actions";
function App() {
  const { getState, subscribe, dispatch } = store;
  const [state, setState] = useState(getState());
  const saveToLocalStorage = (state) => {
    localStorage.setItem("counter", JSON.stringify(state));
  };
  function callback(data) {
    setState(data);
  }
  useEffect(() => {
    subscribe("initialState", {
      name: "appComponentInitializeState",
      callback: callback,
    });
    dispatch("initialState", JSON.parse(localStorage.getItem("counter")));
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
        <button onClick={() => handleIncrementClick()}>+</button>
        <span>
          App Component
          <span> Count_1 : {state.count}</span>
        </span>
        <button onClick={() => handleDecrementClick()}>-</button>
        <PanelComponent />
        <TestComponent />
        <button onClick={handleReset}>RESET</button>
      </header>
    </div>
  );
}

export default App;
