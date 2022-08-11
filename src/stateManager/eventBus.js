import { globalState } from "./reducer";
let state;
let allListeners = {
  counter: [],
  f1Drivers: [],
};
let newState;
const changeCount = (action, state) => {
  newState = action(state);
};
const fetchData = async (action, state) => {
  const fetchedData = await fetch("http://ergast.com/api/f1/2021/drivers.json");
  const response = await fetchedData.json();
  newState = action(state, response.MRData.DriverTable.Drivers);
};
const localStorageItem = localStorage.getItem("counter");
export const createStore = () => {
  if (!localStorageItem) state = globalState;
  else state = JSON.parse(localStorageItem);
  const subscribe = (topic, callback) => {
    allListeners[topic].push(callback);
    return () => {
      return (allListeners[topic] = allListeners[topic].filter(
        (listener) => listener.id !== callback.id
      ));
    };
  };
  const dispatch = async (topic, data, action) => {
    state = data;
    if (topic === "counter") changeCount(action, state);
    if (topic === "f1Drivers") await fetchData(action, state);
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
export const generateRandomnId = () =>
  "_" + Math.random().toString(10).substring(2, 8);
