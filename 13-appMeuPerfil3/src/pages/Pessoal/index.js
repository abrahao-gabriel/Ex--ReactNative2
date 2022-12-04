import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../../style';

export default function Pessoal() {
  let nome = 'Gabriel de Almeida Abrahao';
  let email = 'gabriel17.abrahao@gmail.com';
  let dataNasc = '10/02/2000';
  let tel = '(13) 991960-0247';
  let git = 'https://github.com/abrahao-gabriel';
  return (
    <View style={styles.container}>
      <View style={styles.borda}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/57734187?v=4'}}
          style={styles.image}
        />
        </View>
      <View style={styles.box}>
        <Text style={styles.titulo}>{nome}</Text>
        <Text style={styles.texto}>Data de Nascimento: {dataNasc}</Text>
        <Text style={styles.texto}>E-mail: {email}</Text>
        <Text style={styles.texto}>Celular: {tel}</Text>
        <Text style={styles.texto}>Git: {git}</Text>
      </View>

    </View>
  );
}
