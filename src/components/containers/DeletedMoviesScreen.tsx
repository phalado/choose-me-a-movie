import { connect } from 'react-redux';
import DeletedMoviesScreen from '../screens/DeletedMoviesScreen';
import StateInterface from '../../interfaces/StateInterface';

const mapStateToProps = (state: StateInterface) => ({
  deletedMovies: state.deletedMovies
})

const mapDispatchToProps = (dispatch: any) => ({
  // addMovie: (data: { id: number, title: string }) => dispatch(addMovie(data)),
  // resetMovies: () => dispatch(resetMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeletedMoviesScreen);
