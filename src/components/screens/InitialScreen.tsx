import React, { useState } from "react";
import { Alert, Text, View } from 'react-native';
import CustomButton from "../CustomButton";
import styles from '../../styles/InitialScreen'
import ChooseMovieModal from "../containers/ChooseMovieModal";

const InitialScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <View style={styles.container}>
      <ChooseMovieModal visible={visibleModal} setVisible={setVisibleModal} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Me escolha um filme</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          text={'Escolha um filme'}
          onPress={() => {
            Alert.alert('Certeza?', 'Escolher um filme para assistir?', [
              { text: 'Sim', onPress: () => setVisibleModal(true), style: 'cancel' },
            ]);
          }}
        />

        <CustomButton
          text={'Lista de filmes'}
          onPress={() => navigation.navigate('Movie List')}
        />

        <CustomButton
          text={'Filmes assistidos'}
          onPress={() => navigation.navigate('Watched Movies')}
        />

        <CustomButton
          text={'Filmes excluídos'}
          onPress={() => navigation.navigate('Deleted Movies')}
        />
      </View>
    </View>
  );
}

export default InitialScreen;
