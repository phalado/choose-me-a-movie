import { connect } from 'react-redux';
import { addMovie, resetMovies } from '../../slicers/movieListSlicer';
import MovieListScreen from '../screens/MovieListScreen';
import StateInterface from '../../interfaces/StateInterface';

const mapStateToProps = (state: StateInterface) => ({
  movieList: state.movieList
})

const mapDispatchToProps = (dispatch: any) => ({
  addMovie: (title: string) => dispatch(addMovie(title)),
  resetMovies: () => dispatch(resetMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListScreen);
