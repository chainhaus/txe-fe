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
import { categoryApi } from './services/category';
import { experienceApi } from './services/experience';
import { blistApi } from './services/blist';

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
  [categoryApi.reducerPath]: categoryApi.reducer,
  [experienceApi.reducerPath]: experienceApi.reducer,
  [blistApi.reducerPath]: blistApi.reducer,
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
      categoryApi.middleware,
      experienceApi.middleware,
      blistApi.middleware,
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
