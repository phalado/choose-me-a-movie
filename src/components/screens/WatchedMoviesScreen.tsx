import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from '../../styles/MovieListScreen'
import { WatchedMovieInterface } from "../../interfaces/WatchedMoviesInterface";
import WatchedMovieItem from "../WatchedMovieItem";

const WatchedMoviesScreen = (props: {
  watchedMovies: WatchedMovieInterface[],
}) => {
  const { watchedMovies } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Filmes assistidos</Text>
      <View style={styles.tableContainer}>
        <ScrollView style={{ width: '100%', height: '50%' }}>
          <WatchedMovieItem
            movie={{ title: 'Título', added: 'Adicionado', watched: 'Assistido' }}
            key={-1}
            title
          />
          {watchedMovies.length > 0 && watchedMovies.map((movie: WatchedMovieInterface, index: number) => (
            <WatchedMovieItem movie={movie} key={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default WatchedMoviesScreen;
