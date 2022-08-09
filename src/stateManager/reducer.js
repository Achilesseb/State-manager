export const globalState = {
  count: 0,
};

export const reducer = (state = globalState, action) => {
  switch (action?.type) {
    case "INCREMENT_COUNT": {
      return { ...state, count: action.payload };
    }
    case "DECREMENT_COUNT": {
      return { ...state, count: action.payload };
    }

    default:
      return state;
  }
};
