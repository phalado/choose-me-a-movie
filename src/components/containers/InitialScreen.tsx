import { connect } from 'react-redux';
import InitialScreen from '../screens/InitialScreen';
import StateInterface from '../../interfaces/StateInterface';

const mapStateToProps = (state: StateInterface) => ({
  movieList: state.movieList
})

export default connect(mapStateToProps, null)(InitialScreen);
