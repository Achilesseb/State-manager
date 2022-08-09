import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import PanelComponent from "./PanelComponent/PanelComponent";
import { globalState, reducer } from "./stateManager/reducer";
import { createStore } from "./stateManager/eventBus";
function App() {
  const store = createStore(reducer, globalState);
  const [state, setState] = useState(store.getState());
  function callback(data) {
    setState(data);
  }
  useEffect(() => {
    store.subscribe("message", callback);
  }, []);
  const handleClick = () => {
    setState(store.dispatch("message"));
  };
  return (
    <div className="App">
      <header className="App-header">
        <span>{state.count}</span>
        <PanelComponent store={store} />
      </header>
    </div>
  );
}

export default App;
