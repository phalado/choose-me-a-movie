import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { MovieInterface } from "../interfaces/MovieListInterface";
import styles from '../styles/MovieListItem'

const MovieListItem = (props: {
  movie: MovieInterface
  index: number
  removeMovieFromList: (id: number) => void
  title?: boolean
}) => {
  const { movie, index, removeMovieFromList, title } = props;
  let tableTextStyle = title ? styles.tableTextTitle : styles.tableText

  return (
    <View style={styles.tableRow}>
      <View style={{ width: '60%' }}>
        <Text style={tableTextStyle}>{movie.title}</Text>
      </View>
      <View style={{ width: title ? '40%' : '30%' }}>
        <Text style={tableTextStyle}>{movie.added}</Text>
      </View>
      {!title && <TouchableOpacity
        onPress={() => {
          Alert.alert('Certeza?', 'Excluir filme da lista?', [
            { text: 'Sim', onPress: () => removeMovieFromList(index), style: 'cancel' },
          ]);
        }}
        style={styles.deleteButton}
      >
        <Text style={{ textAlign: 'center', color: 'red' }}>X</Text>
      </TouchableOpacity>}
    </View>
  )
}

export default MovieListItem;
