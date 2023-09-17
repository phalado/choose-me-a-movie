import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../styles/MovieListItem'
import { DeletedMovieInterface } from "../interfaces/DeletedMoviesInterface";

const DeletedMovieItem = (props: { movie: DeletedMovieInterface }) => {
  const { movie } = props;

  return (
    <View style={styles.tableRow}>
      <View style={{ width: '50%' }}>
        <Text style={styles.tableText}>{movie.title}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={styles.tableText}>{movie.added}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={styles.tableText}>{movie.deleted}</Text>
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

export default DeletedMovieItem;
