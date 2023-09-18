import React from "react";
import { Text, View } from "react-native";
import Modal from 'react-native-modal';
import CustomButton from "../CustomButton";
import { MovieInterface } from "../../interfaces/MovieListInterface";
import styles from '../../styles/Modals'

const ChooseMovieModal = (props: {
  visible: boolean
  setVisible: (visible: boolean) => void
  movieList: MovieInterface[]
  removeMovie: (id: number) => void
  addWatchedMovie: (data: MovieInterface) => void
}) => {
  const { visible, setVisible, movieList, removeMovie, addWatchedMovie } = props;

  if (!visible) return null

  const choosenMovieId = Math.floor(Math.random() * movieList.length)
  const choosenMovie = movieList[choosenMovieId]

  const setMovieAsWatched = () => {
    addWatchedMovie(choosenMovie)
    removeMovie(choosenMovieId)
    setVisible(false)
  }

  return(
    <Modal isVisible={visible} style={{ alignItems: 'center' }}>
      <View style={styles.addMovieContainer}>
        <Text style={{ fontSize: 20, color: 'white' }}>Filme escolhido:</Text>
        <Text style={{ fontSize: 30, color: 'white' }}>{choosenMovie.title}</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton
            text='Aceitar'
            width='50%'
            height={50}
            onPress={() => setMovieAsWatched()}
          />
        </View>
      </View>
    </Modal>
  )
}

export default ChooseMovieModal;
