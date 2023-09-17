import React, { useCallback, useState } from "react";
import { BackHandler, ScrollView, Text, View } from "react-native";
import styles from '../../styles/MovieListScreen'
import { MovieInterface } from "../../interfaces/MovieListInterface";
import MovieListItem from "../MovieListItem";
import CustomButton from "../CustomButton";
import AddMovieModal from "../modals/AddMovieModal";
import { useFocusEffect } from "@react-navigation/native";

const MovieListScreen = (props: {
  navigation: any
  movieList: MovieInterface[]
  addMovie: (title: string) => void
  removeMovie: (id: number) => void
  addDeletedMovie: (data: MovieInterface) => void
}) => {
  const { navigation, movieList, addMovie, removeMovie, addDeletedMovie } = props;
  const [visibleModal, setVisibleModal] = useState(false)

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => { navigation.pop(); return true };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  )

  const removeMovieFromList = (id: number) => {
    addDeletedMovie(movieList[id])
    removeMovie(id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Lista de filmes</Text>
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
        <ScrollView style={{ width: '100%', height: '50%' }}>
          <MovieListItem
            movie={{ title: 'Título', added: 'Data adicionado' }}
            index={-1}
            removeMovieFromList={removeMovieFromList}
            key={-1}
            title
          />
          {movieList.length > 0 && movieList.map((movie: MovieInterface, index: number) => (
            <MovieListItem
              movie={movie}
              index={index}
              removeMovieFromList={removeMovieFromList}
              key={JSON.stringify(movie)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default MovieListScreen;
