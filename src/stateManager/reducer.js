export const globalState = {
  count: 0,
  count2: 100,
  f1Drivers: [],
};

export const reducer = (state = globalState, action) => {
  switch (action?.type) {
    case "INCREMENT_COUNT": {
      return { ...state, count: action.payload };
    }
    case "DECREMENT_COUNT": {
      return { ...state, count: action.payload };
    }
    case "INCREMENT_COUNT_2": {
      return { ...state, count2: action.payload };
    }
    case "DECREMENT_COUNT_2": {
      return { ...state, count2: action.payload };
    }
    case "SET_F1_DRIVERS": {
      return { ...state, f1Drivers: action.payload };
    }
    case "RESET": {
      return { ...globalState };
    }

    default:
      return state;
  }
};
