import React, { useCallback, useState } from "react";
import { BackHandler, ScrollView, View } from "react-native";
import styles from '../../styles/MovieListScreen'
import { MovieInterface } from "../../interfaces/MovieListInterface";
import MovieListItem from "../MovieListItem";
import CustomButton from "../CustomButton";
import AddMovieModal from "../modals/AddMovieModal";
import { useFocusEffect } from "@react-navigation/native";

const MovieListScreen = (props: {
  navigation: any
  movieList: MovieInterface[],
  addMovie: (title: string) => void
  resetMovies: () => void
}) => {
  const { navigation, movieList, addMovie } = props;
  const [visibleModal, setVisibleModal] = useState(false)

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => { navigation.pop(); return true };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  )

  return (
    <View style={styles.container}>
      <AddMovieModal
        visible={visibleModal}
        setVisible={setVisibleModal}
        addMovie={addMovie}
        movieList={movieList.map(movie => movie.title)}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Adicionar um filme"
          onPress={() => setVisibleModal(true)}
          height='80%'
        />
      </View>
      <View style={styles.tableContainer}>
        <ScrollView style={{ width: '90%', height: '50%' }}>
          {movieList.length > 0 && movieList.map((movie: MovieInterface) => (
            <MovieListItem movie={movie} key={Object.values(movie).join('')} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default MovieListScreen;
