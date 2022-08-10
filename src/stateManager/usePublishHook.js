import { useState } from "react";
export const usePublishHook = (currentState, newState) => {
  console.log(currentState);
  const [state, setState] = useState(currentState);
  console.log(state);
  let callback = (newState) => {
    console.log(newState);
    return setState(newState);
  };
  return state;
};
