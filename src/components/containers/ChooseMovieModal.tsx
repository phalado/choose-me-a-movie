import { connect } from 'react-redux';
import ChooseMovieModal from '../modals/ChooseMovieModal';

import {  removeMovie } from '../../slicers/movieListSlicer';

import StateInterface from '../../interfaces/StateInterface';
import { MovieInterface } from '../../interfaces/MovieListInterface';
import { addWatchedMovie } from '../../slicers/watchedMoviesSlicer';

const mapStateToProps = (state: StateInterface) => ({
  movieList: state.movieList
})

const mapDispatchToProps = (dispatch: any) => ({
  removeMovie: (id: number) => dispatch(removeMovie(id)),
  addWatchedMovie: (data: MovieInterface) => dispatch(addWatchedMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseMovieModal);
