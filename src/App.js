import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import PanelComponent from "./PanelComponent/PanelComponent";
import CounterContextProvider, { CounterContext } from "./stateManager/context";
import { useContext } from "react";
import { useEventBus } from "./stateManager/eventBus";
import { globalState, reducer } from "./stateManager/reducer";
function App() {
  const store = useEventBus(reducer, globalState);
  const count = useContext(CounterContext);
  useEffect(() => {
    store.subscribe();
  }, []);
  return (
    <CounterContextProvider value={{ count }}>
      <div className="App">
        <header className="App-header">
          <PanelComponent />
        </header>
      </div>
    </CounterContextProvider>
  );
}

export default App;
