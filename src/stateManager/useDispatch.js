import { useContext } from "react";
import { CounterContext } from "./context";
import { counterChangeTypes as types } from "./types";
export const useDispatch = () => {
  const { state, dispatch } = useContext(CounterContext);
  return {
    incrementCount: () =>
      dispatch({ type: types.INCREMENT_COUNT, payload: state.count + 1 }),
    decrementCount: () =>
      dispatch({ type: types.DECREMENT_COUNT, payload: state.count - 1 }),
  };
};
