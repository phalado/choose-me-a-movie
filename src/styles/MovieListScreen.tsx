import { StyleSheet } from 'react-native';

const MovieListStyles = StyleSheet.create({
  container: {
    width: '96%',
    height: '96%',
    margin: '2%',
  },
  buttonContainer: {
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  tableContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  screenTitle: {
    height: '6%',
    marginTop: 10,
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})

export default MovieListStyles;
