import { combineReducers } from "redux";

import cartReducer from "./cart/cartReducer";
import wishListReducer from './wishList/wishListReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishList: wishListReducer
});

export default rootReducer;