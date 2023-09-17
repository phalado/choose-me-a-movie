import { createSlice } from '@reduxjs/toolkit';
import { DeletedMovieInterface } from '../interfaces/DeletedMoviesInterface';
import { MovieInterface } from '../interfaces/MovieListInterface';

const initialState: DeletedMovieInterface[] = []

const DeletedMoviesSlicer = createSlice({
  name: 'deletedMovies',
  initialState,
  reducers: {
    addDeletedMovie: (state = initialState, action: { payload: MovieInterface }) => ([
      ...state,
      {
        title: action.payload.title,
        added: action.payload.added,
        deleted: new Date().toLocaleDateString('pt-BR')
      }
    ])
  }
})

export const { addDeletedMovie } = DeletedMoviesSlicer.actions
export default DeletedMoviesSlicer.reducer
