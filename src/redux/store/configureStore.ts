import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/combineReducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootDispatch = typeof store.dispatch;
export default store;
