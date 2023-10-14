import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DEC_QUANTITY,
  INC_QUANTITY,
} from "../types/cart.types";

export const AddtoCartAction = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const RemoveFromCartAction = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const IncrementQuantityAction = (payload) => {
  return {
    type: INC_QUANTITY,
    payload,
  };
};
export const DecrementQuantityAction = (payload) => {
  return {
    type: DEC_QUANTITY,
    payload,
  };
};
