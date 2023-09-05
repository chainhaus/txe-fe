import { Store, configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './reducers/auth';
import inform from './reducers/inform';
import confirm from './reducers/confirm';
import globalModal from './reducers/modal';
import { authApi } from './services/auth';
import { eventApi } from './services/event';
import { ticketApi } from './services/ticket';
import { orderApi } from './services/order';
import { partnerShipApi } from './services/partnership';
import { clientApi } from './services/client';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const RootReducer = combineReducers({
  auth,
  inform,
  confirm,
  globalModal,
  [authApi.reducerPath]: authApi.reducer,
  [eventApi.reducerPath]: eventApi.reducer,
  [ticketApi.reducerPath]: ticketApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [partnerShipApi.reducerPath]: partnerShipApi.reducer,
  [clientApi.reducerPath]: clientApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store: Store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      authApi.middleware,
      eventApi.middleware,
      ticketApi.middleware,
      orderApi.middleware,
      partnerShipApi.middleware,
      clientApi.middleware,
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
