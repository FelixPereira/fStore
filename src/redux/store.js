import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist'; 

import persistedReducer from './rootReducer';

const middleware = process.env.NODE_ENV === 'development' ? logger : '';

export const store = createStore(
  persistedReducer,
  applyMiddleware(middleware)
);

export const persistor = persistStore(store);

export default { store, persistor };