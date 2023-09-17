import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './Navigation';

import movieListReducer from './slicers/movieListSlicer';
import deletedMoviesReducer from './slicers/deletedMoviesSlicer';
import watchedMoviesReducer from './slicers/watchedMoviesSlicer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const rootReducer = combineReducers({
  movieList: movieListReducer,
  deletedMovies: deletedMoviesReducer,
  watchedMovies: watchedMoviesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});
const persistor = persistStore(store);

const ReduxProvider = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);

export default ReduxProvider;
