import { createContext, useContext } from "react";
import { CounterContext } from "./context";
import { globalState } from "./reducer";
import { reducer } from "./reducer";
import { useDispatch } from "./useDispatch";

export const useEventBus = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = useDispatch();
  return {
    subscribe,
    getState,
    dispatch,
  };
};
