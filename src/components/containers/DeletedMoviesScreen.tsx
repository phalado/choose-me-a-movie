import { connect } from 'react-redux';
import DeletedMoviesScreen from '../screens/DeletedMoviesScreen';
import StateInterface from '../../interfaces/StateInterface';

const mapStateToProps = (state: StateInterface) => ({
  deletedMovies: state.deletedMovies
})

export default connect(mapStateToProps, null)(DeletedMoviesScreen);
