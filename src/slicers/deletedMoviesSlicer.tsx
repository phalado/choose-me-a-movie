import { createSlice } from '@reduxjs/toolkit';
import { DeletedMovieInterface } from '../interfaces/DeletedMoviesInterface';

const initialState: DeletedMovieInterface[] = []

const DeletedMoviesSlicer = createSlice({
  name: 'deletedMovies',
  initialState,
  reducers: {
    addDeletedMovie: (state = initialState, action: { payload: { title: string, added: string } }) => ([
      ...state,
      {
        title: action.payload.title,
        added: action.payload.added,
        deleted: new Date().toLocaleDateString('pt-BR')
      }
    ])
  }
})

export const {} = DeletedMoviesSlicer.actions
export default DeletedMoviesSlicer.reducer
