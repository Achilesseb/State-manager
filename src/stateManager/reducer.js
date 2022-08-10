export const globalState = {
  count: 0,
  count2: 100,
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
    case "RESET": {
      return { ...globalState };
    }

    default:
      return state;
  }
};
