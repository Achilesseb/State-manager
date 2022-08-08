import { counterChangeTypes as types } from "./types.js";

export const incrementCount = (action) => ({
  type: types.INCREMENT_COUNT,
  payload: action.value,
});
export const decrementCount = (action) => ({
  type: types.DECREMENT_COUNT,
  action: action.value,
});
