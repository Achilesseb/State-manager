import { useState } from "react";
import { useCustomHook } from "./usePublishHook";
import { incrementCount } from "./actions.js";

let state;
let allListeners = {
  message: [],
};
let newState;

export const createStore = (reducer, initialState) => {
  state = initialState;

  const subscribe = (topic, callback) => {
    allListeners[topic].push(callback);
    // return () => (allListeners[topic] = []);
  };

  const dispatch = (topic, data, direction) => {
    console.log(data);
    if (direction === "increase")
      newState = reducer(state, {
        type: "INCREMENT_COUNT",
        payload: data + 1,
      });
    else if (direction === "decrease")
      newState = reducer(state, {
        type: "INCREMENT_COUNT",
        payload: data - 1,
      });
    console.log(newState);
    console.log(allListeners);
    allListeners[topic].forEach((listener) => {
      console.log(newState);
      listener(newState);
    });
  };
  const getState = () => state;
  return {
    subscribe,
    getState,
    dispatch,
    state,
  };
};
