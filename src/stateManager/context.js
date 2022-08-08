import React, { createContext, useReducer } from "react";
import { globalState } from "./reducer";
import { reducer } from "./reducer";
import { useEventBus } from "./eventBus";
export const CounterContext = createContext(reducer);
const CounterContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};
export default CounterContextProvider;
