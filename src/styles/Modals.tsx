import { StyleSheet } from 'react-native';

const ModalsStyles = StyleSheet.create({
  addMovieContainer: {
    width: '80%',
    height: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  input: {
    color: 'black',
    textAlign: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
    alignSelf: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  }
})

export default ModalsStyles;
