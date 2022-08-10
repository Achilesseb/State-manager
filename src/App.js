import "./App.css";
import React, { useEffect, useState } from "react";
import PanelComponent from "./PanelComponent/PanelComponent";
import TestComponent from "./PanelComponent/TestCountComponent";
import { store } from "./stateManager/eventBus";
function App() {
  const [state, setState] = useState(store.getState());
  function callback(data) {
    setState(data);
  }
  useEffect(() => {
    return store.subscribe("counter", {
      name: "appComponent",
      callback: callback,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <span>Counter in App Component: {state.count}</span>
        <PanelComponent />
        <TestComponent />
      </header>
    </div>
  );
}

export default App;
