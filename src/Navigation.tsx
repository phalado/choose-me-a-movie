import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from './components/screens/InitialScreen';
import MovieListScreen from './components/containers/MovieListScreen';
import DeletedMoviesScreen from './components/containers/DeletedMoviesScreen';
import WatchedMoviesScreen from './components/containers/WatchedMoviesScreen';

class Navigation extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  render() {
    const Stack = createNativeStackNavigator();
    const options = { headerShown: false }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial Screen">
          <Stack.Screen name="Initial Screen" component={InitialScreen} options={options} />
          <Stack.Screen name="Movie List" component={MovieListScreen} options={options} />
          <Stack.Screen name="Deleted Movies" component={DeletedMoviesScreen} options={options} />
          <Stack.Screen name="Watched Movies" component={WatchedMoviesScreen} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
