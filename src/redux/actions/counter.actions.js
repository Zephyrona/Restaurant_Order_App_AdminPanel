import { INCREMENT, DECREMENT } from "../types/counter.types";

export const IncrementAction = (payload) => {
  return {
    type: INCREMENT,
    payload
  };
};

export const DecrementAction = (payload) => {
  return {
    type: DECREMENT,
    payload
  };
};
