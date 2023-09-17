import { connect } from 'react-redux';
import WatchedMoviesScreen from '../screens/WatchedMoviesScreen';
import StateInterface from '../../interfaces/StateInterface';

const mapStateToProps = (state: StateInterface) => ({
  watchedMovies: state.watchedMovies
})

export default connect(mapStateToProps, null)(WatchedMoviesScreen);
