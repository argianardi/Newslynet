import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import archiveReducer from '../features/archiveSlice';

const persistConfig = {
  key: 'Newslynet',
  storage,
};

const persistedReducer = persistReducer(persistConfig, archiveReducer);

const store = configureStore({
  reducer: {
    archive: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
