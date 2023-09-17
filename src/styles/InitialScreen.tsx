import { StyleSheet } from 'react-native';

const InitialScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 30
  },
  titleContainer: {
    height: '10%',
  },
  title: {
    fontSize: 30
  },
  buttonContainer: {
    height: '80%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})

export default InitialScreenStyles;
