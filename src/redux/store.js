import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
//import { persistStore } from 'redux-persist'; 

import persistedReducer from './rootReducer';

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger)
);

export const persistor = persistStore(store);

export default { store, persistor };