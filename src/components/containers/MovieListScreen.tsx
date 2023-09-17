import { connect } from 'react-redux';
import MovieListScreen from '../screens/MovieListScreen';

import { addMovie, removeMovie } from '../../slicers/movieListSlicer';
import { addDeletedMovie } from '../../slicers/deletedMoviesSlicer';

import StateInterface from '../../interfaces/StateInterface';
import { MovieInterface } from '../../interfaces/MovieListInterface';

const mapStateToProps = (state: StateInterface) => ({
  movieList: state.movieList
})

const mapDispatchToProps = (dispatch: any) => ({
  addMovie: (title: string) => dispatch(addMovie(title)),
  removeMovie: (id: number) => dispatch(removeMovie(id)),
  addDeletedMovie: (data: MovieInterface) => dispatch(addDeletedMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListScreen);
