import { useState } from "react";
import { store } from "./eventBus";
import { useEffect } from "react";
import { saveToLocalStorage } from "./eventBus";
export const usePublishHook = (randomId) => {
  const { getState, subscribe } = store;
  const [state, setState] = useState(getState());
  useEffect(() => {
    return subscribe("counter", {
      id: randomId,
      callback: setState,
    });
  }, []);
  useEffect(() => {
    return saveToLocalStorage(state);
  });
  return state;
};
