import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MovieInterface } from "../interfaces/MovieListInterface";
import styles from '../styles/MovieListItem'

const MovieListItem = (props: { movie: MovieInterface }) => {
  const { movie } = props;

  return (
    <View style={styles.tableRow}>
      <View style={{ width: '60%' }}>
        <Text style={styles.tableText}>{movie.title}</Text>
      </View>
      <View style={{ width: '30%' }}>
        <Text style={styles.tableText}>{movie.added}</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log(movie.title)}
        style={styles.deleteButton}
      >
        <Text style={{ textAlign: 'center' }}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MovieListItem;
