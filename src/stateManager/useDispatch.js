import { counterChangeTypes as types } from "./types";
export const useDispatch = (state, dispatch) => {
  return {
    incrementCount: { type: types.INCREMENT_COUNT, payload: state + 1 },
    decrementCount: { type: types.DECREMENT_COUNT, payload: state - 1 },
  };
};
