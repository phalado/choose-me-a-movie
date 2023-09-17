import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from '../../styles/MovieListScreen'
import { DeletedMovieInterface } from "../../interfaces/DeletedMoviesInterface";
import DeletedMovieItem from "../DeletedMovieItem";

const DeletedMoviesScreen = (props: {
  deletedMovies: DeletedMovieInterface[],
}) => {
  const { deletedMovies } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Filmes excluídos</Text>
      <View style={styles.tableContainer}>
        <ScrollView style={{ width: '100%', height: '50%' }}>
          <DeletedMovieItem
            movie={{ title: 'Título', added: 'Adicionado', deleted: 'Excluído' }}
            key={-1}
            title
          />
          {deletedMovies.length > 0 && deletedMovies.map((movie: DeletedMovieInterface, index: number) => (
            <DeletedMovieItem movie={movie} key={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default DeletedMoviesScreen;
