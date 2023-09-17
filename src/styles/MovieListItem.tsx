import { StyleSheet } from 'react-native';

const MovieListItemStyles = StyleSheet.create({
  container: {
    width: '96%',
    height: '5%',
    margin: '2%',
  },
  buttonContainer: {
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableRow: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 2,
    borderColor: '#c8e1ff',
    backgroundColor: '#rgba(241, 248, 255, 0.7)',
  },
  tableText: {
    margin: 6,
    alignSelf: 'center',
    flex: 1,
  },
  tableTextTitle: {
    margin: 6,
    alignSelf: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  deleteButton: {
    alignSelf: 'center',
    width: '10%',
  }
})

export default MovieListItemStyles;
