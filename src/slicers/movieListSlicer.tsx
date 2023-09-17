import { createSlice } from '@reduxjs/toolkit';
import { MovieInterface } from '../interfaces/MovieListInterface';

const list = ['42298031',
  '42298032',
  '42298033',
  '42298034',
  '42298035',
  '42298036',
  '42298037',
  '42298038',
  '42298039',
  '42298040',
  '42298041',
  '42298042',
  '42298043',
  '42298044',
  '42298045',
  '42298046',
  '42298047',
  '42298048',
  '42298049',
  '42298050',
  '42298051',
  '42298052',
  '42298053',
  '42298054',
  '42298055',
  '42298056',
  '42298057',
  '42298058',
  '42298059',
  '42298060',
  '42298061',
  '42298062',
  '42298063',
  '42298064'].map((movie) => ({ title: movie, added: new Date().toLocaleDateString('pt-BR') }))

const initialState: MovieInterface[] = [...list]

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
    removeMovie: (state = initialState, action: { payload: number }) => ([...state.splice(action.payload, 1)]),
    resetMovies: () => ([...initialState]),
  }
})

export const { addMovie, removeMovie, resetMovies } = MovieListSlicer.actions
export default MovieListSlicer.reducer
