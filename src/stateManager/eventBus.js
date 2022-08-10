import { globalState } from "./reducer";
let state;
let allListeners = {
  counter: [],
  initialState: [],
};
let newState;
const changeCount = (action, state, data) => {
  newState = action(data, state);
};

export const createStore = (initialState) => {
  state = initialState;
  const subscribe = (topic, callback) => {
    allListeners[topic].push(callback);
    return () =>
      (allListeners[topic] = allListeners[topic].filter(
        (listener) => listener.name !== callback.name
      ));
  };
  const dispatch = (topic, data, action) => {
    state = data;
    if (topic === "counter") changeCount(action, state, data);
    if (topic === "initialState") newState = data;
    allListeners[topic].forEach(({ callback }) => {
      callback(newState, data);
    });
  };
  const getState = () => state;
  
  return {
    subscribe,
    getState,
    dispatch,
  };
};

export const store = createStore(globalState);
export const saveToLocalStorage = (state) => {
  localStorage.setItem("counter", JSON.stringify(state));
};
