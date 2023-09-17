import React from "react";
import { ScrollView, View } from "react-native";
import styles from '../../styles/MovieListScreen'
import { DeletedMovieInterface } from "../../interfaces/DeletedMoviesInterface";
import DeletedMovieItem from "../DeletedMovieItem";

const DeletedMoviesScreen = (props: {
  deletedMovies: DeletedMovieInterface[],
}) => {
  const { deletedMovies } = props;

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <ScrollView style={{ width: '90%', height: '50%' }}>
          {deletedMovies.length > 0 && deletedMovies.map((movie: DeletedMovieInterface) => (
            <DeletedMovieItem movie={movie} key={Object.values(movie).join('')} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default DeletedMoviesScreen;
