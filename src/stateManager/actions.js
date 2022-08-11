import { counterChangeTypes as types } from "./types.js";
import { reducer } from "./reducer.js";
export const incrementCount = (state) =>
  reducer(state, {
    type: types.INCREMENT_COUNT,
    payload: state.count + 1,
  });
export const decrementCount = (state) =>
  reducer(state, {
    type: types.DECREMENT_COUNT,
    payload: state.count - 1,
  });
export const incrementCount2 = (state) =>
  reducer(state, {
    type: types.INCREMENT_COUNT_2,
    payload: state.count2 + 1,
  });
export const decrementCount2 = (state) =>
  reducer(state, {
    type: types.DECREMENT_COUNT_2,
    payload: state.count2 - 1,
  });
export const setF1Drivers = (state, response) =>
  reducer(state, {
    type: types.SET_F1_DRIVERS,
    payload: response,
  });
export const reset = (state) => reducer(state, { type: "RESET" });
