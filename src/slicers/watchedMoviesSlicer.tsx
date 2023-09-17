import { createSlice } from '@reduxjs/toolkit';
import { MovieInterface } from '../interfaces/MovieListInterface';
import { WatchedMovieInterface } from '../interfaces/WatchedMoviesInterface';

const initialState: WatchedMovieInterface[] = []

const WatchedMoviesSlicer = createSlice({
  name: 'watchedMovies',
  initialState,
  reducers: {
    addWatchedMovie: (state = initialState, action: { payload: MovieInterface }) => ([
      ...state,
      {
        title: action.payload.title,
        added: action.payload.added,
        watched: new Date().toLocaleDateString('pt-BR')
      }
    ])
  }
})

export const { addWatchedMovie } = WatchedMoviesSlicer.actions
export default WatchedMoviesSlicer.reducer
