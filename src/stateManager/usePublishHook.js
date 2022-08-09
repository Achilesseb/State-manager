import { useState } from "react";
export const useCustomHook = (currentState, newState) => {
  console.log(currentState, newState);
  const [state, setState] = useState(currentState);
  let callback = (newState) => setState(newState);
  return state;
};
