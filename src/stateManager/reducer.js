import React from "react";
import { counterChangeTypes as types } from "./types.js";
import { createContext } from "react";
export const globalState = {
  count: 0,
};

export const reducer = (state = globalState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT: {
      return { ...state, count: action.payload };
    }
    case types.DECREMENT_COUNT: {
      return { ...state, count: action.payload };
    }
    default:
      return state;
  }
};
