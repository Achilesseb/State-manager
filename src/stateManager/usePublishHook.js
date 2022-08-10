import { useState } from "react";
export const usePublishHook = (currentState, newState) => {
  console.log(currentState, newState);
  const [state, setState] = useState(currentState);
  let callback = (newState) => setState(newState);
  return callback;
};
