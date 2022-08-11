import { globalState } from "./reducer";
let state;
let allListeners = {
  counter: [],
};
let newState;
const changeCount = (action, data) => {
  newState = action(data);
};
const localStorageItem = localStorage.getItem("counter");
export const createStore = () => {
  if (!localStorageItem) state = globalState;
  else state = JSON.parse(localStorageItem);
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

export const store = createStore();
export const saveToLocalStorage = (state) => {
  localStorage.setItem("counter", JSON.stringify(state));
};
