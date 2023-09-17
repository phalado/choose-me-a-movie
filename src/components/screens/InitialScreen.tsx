import React from "react";
import { Text, View } from 'react-native';
import CustomButton from "../CustomButton";
import styles from '../../styles/InitialScreen'

const InitialScreen = (props: {
  navigation: any
}) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Me escolha um filme</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          text={'Escolha um filme'}
          onPress={() => null}
        />

        <CustomButton
          text={'Lista de filmes'}
          onPress={() => navigation.navigate('Movie List')}
        />

        <CustomButton
          text={'Filmes assistidos'}
          onPress={() => null}
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
