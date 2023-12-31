import React from "react";
import { Text, View } from "react-native";
import styles from '../styles/MovieListItem'
import { DeletedMovieInterface } from "../interfaces/DeletedMoviesInterface";

const DeletedMovieItem = (props: { movie: DeletedMovieInterface, title?: boolean }) => {
  const { movie, title } = props;
  let tableTextStyle = title ? styles.tableTextTitle : styles.tableText

  return (
    <View style={styles.tableRow}>
      <View style={{ width: '40%' }}>
        <Text style={tableTextStyle}>{movie.title}</Text>
      </View>
      <View style={{ width: '30%' }}>
        <Text style={tableTextStyle}>{movie.added}</Text>
      </View>
      <View style={{ width: '30%' }}>
        <Text style={tableTextStyle}>{movie.deleted}</Text>
      </View>
    </View>
  )
}

export default DeletedMovieItem;
