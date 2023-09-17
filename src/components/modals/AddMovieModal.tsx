import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Modal from 'react-native-modal';
import styles from '../../styles/Modals'
import CustomButton from "../CustomButton";

const AddMovieModal = (props: {
  visible: boolean
  setVisible: (visible: boolean) => void
  addMovie: (title: string) => void
  movieList: string[]
}) => {
  const { visible, setVisible, addMovie, movieList } = props;
  const [title, setTitle] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => setButtonDisabled(movieList.includes(title) || title === ''), [title])

  return(
    <Modal isVisible={visible} style={{ alignItems: 'center' }}>
      <View style={styles.addMovieContainer}>
        <Text style={{ fontSize: 20, color: 'white' }}>Adicionar Filme:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        {buttonDisabled && <Text style={{ fontSize: 15, color: 'red' }}>* Filme já adicionado ou título em branco</Text>}
        <View style={styles.buttonsContainer}>
          <CustomButton
            text='Adicionar'
            width='50%'
            height={50}
            onPress={() => { addMovie(title); setTitle('') }}
            disabled={buttonDisabled}
          />
          <CustomButton
            text='Voltar'
            width='30%'
            height={50}
            onPress={() => { setVisible(false); setTitle('') }}
          />
        </View>
      </View>
    </Modal>
  )
}

export default AddMovieModal;
