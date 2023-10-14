import { INCREMENT, DECREMENT } from "../types/counter.types";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + action.payload,
      };
    case DECREMENT:
      return {
        counter: state.counter - action.payload,
      };

    default:
      return state;
  }
};
