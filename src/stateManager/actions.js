import { counterChangeTypes as types } from "./types.js";
import { reducer } from "./reducer.js";
export const incrementCount = (data, state) =>
  reducer(state, {
    type: types.INCREMENT_COUNT,
    payload: data + 1,
  });
export const decrementCount = (data, state) =>
  reducer(state, {
    type: types.DECREMENT_COUNT,
    payload: data - 1,
  });
