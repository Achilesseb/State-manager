import { counterChangeTypes as types } from "./types.js";
import { reducer } from "./reducer.js";
export const incrementCount = (data, state) =>
  reducer(state, {
    type: types.INCREMENT_COUNT,
    payload: data.count + 1,
  });
export const decrementCount = (data, state) =>
  reducer(state, {
    type: types.DECREMENT_COUNT,
    payload: data.count - 1,
  });
export const incrementCount2 = (data, state) =>
  reducer(state, {
    type: types.INCREMENT_COUNT_2,
    payload: data.count2 + 1,
  });
export const decrementCount2 = (data, state) =>
  reducer(state, {
    type: types.DECREMENT_COUNT_2,
    payload: data.count2 - 1,
  });

export const reset = (state) => reducer(state, { type: "RESET" });
