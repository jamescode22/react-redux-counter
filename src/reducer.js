const initialState = { count: 0 };
import { ADD, MINUS } from "./types";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const s = { ...state };
      s.count += 1;
      return s;
    }
    case MINUS: {
      const s = { ...state };
      s.count -= 1;
      return s;
    }
    default:
      return state;
  }
};
