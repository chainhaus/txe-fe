import { Store, configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './reducers/auth';
import inform from './reducers/inform';
import { authApi } from './services/auth';
import { eventApi } from './services/event';
import { ticketApi } from './services/ticket';
import { orderApi } from './services/order';
import { partnerShipApi } from './services/partnership';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const RootReducer = combineReducers({
  auth,
  inform,
  [authApi.reducerPath]: authApi.reducer,
  [eventApi.reducerPath]: eventApi.reducer,
  [ticketApi.reducerPath]: ticketApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [partnerShipApi.reducerPath]: partnerShipApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store: Store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApi.middleware,
      eventApi.middleware,
      ticketApi.middleware,
      orderApi.middleware,
      partnerShipApi.middleware,
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
