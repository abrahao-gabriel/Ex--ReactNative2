import React from 'react';
import { View, Text, Button, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../style';
 
 
export default function Pessoal() {
  const navigation = useNavigation();
  let nome = 'Laila Sabrina Alves Silva de Lima';
  let email = 'ladysam.asl@hotmail.com';
  let dataNasc = '09/10/95';
  let tel = '(13) 99114-6805';
  let git = 'https://github.com/lailasabrina';
  return (
    <View style={styles.container}>
      <View style={styles.borda}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/58498480?v=4' }}
          style={styles.image}
        />
        </View>
      <View style={styles.box}>
        <Text style={styles.titulo}>Dados Pessoais</Text>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Data de Nascimento: {dataNasc}</Text>
        <Text style={styles.texto}>E-mail: {email}</Text>
        <Text style={styles.texto}>Celular: {tel}</Text>
        <Text style={styles.texto}>Git: {git}</Text>
      </View>

    </View>
  );
}
