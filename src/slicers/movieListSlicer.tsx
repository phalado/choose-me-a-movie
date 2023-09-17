import { createSlice } from '@reduxjs/toolkit';
import { MovieInterface } from '../interfaces/MovieListInterface';

const initialState: MovieInterface[] = []

const MovieListSlicer = createSlice({
  name: 'movieList',
  initialState,
  reducers: {
    addMovie: (state = initialState, action: { payload: string }) => ([
      ...state,
      {
        title: action.payload,
        added: new Date().toLocaleDateString('pt-BR')
      }
    ]),
    removeMovie: (state = initialState, action: { payload: number }) => {
      const newState = [...state]
      newState.splice(action.payload, 1)
      return [...newState]
    },
    resetMovies: () => ([...initialState]),
  }
})

export const { addMovie, removeMovie, resetMovies } = MovieListSlicer.actions
export default MovieListSlicer.reducer
