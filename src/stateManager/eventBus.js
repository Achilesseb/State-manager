import { reducer, globalState } from "./reducer";
let state;
let allListeners = {
  counter: [],
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
    changeCount(action, state, data);
    allListeners[topic].forEach(({ callback }) => {
      callback(newState);
    });
  };
  const getState = () => state;
  return {
    subscribe,
    getState,
    dispatch,
  };
};
export const store = createStore(reducer, globalState);
