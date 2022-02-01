import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from "./cart/cartReducer";
import wishListReducer from './wishList/wishListReducer';
import sidebarReducer from "./sidebar/sidebarReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'wishList']
};

const rootReducer = combineReducers({
  cart: cartReducer,
  wishList: wishListReducer,
  sidebar: sidebarReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;