import { combineReducers } from "redux";
import { counterReducer } from "./reducers/counter.reducer";
import {cartReducer} from './reducers/cart.reducer'

export const allReducers = combineReducers({
  counterReducer,
  cartReducer
});
