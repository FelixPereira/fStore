import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from "./cart/cartReducer";
import wishListReducer from './wishList/wishListReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'whislist']
};

const rootReducer = combineReducers({
  cart: cartReducer,
  wishList: wishListReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;