import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../style';
 
 
export default function Experiencia() {
  const navigation = useNavigation();
 return (
  <View style={styles.container2}>
  <View style={styles.box2}>
    <Text style={styles.titulo}>Experiência</Text>
    <Text style={styles.textotitulo}>• Recep. Caixa</Text>
    <Text style={styles.texto2}>Carrefour - São Vicente</Text>
    <Text style={styles.textotitulo}>• Estágiaria</Text>
    <Text style={styles.texto2}>Liceu Santista - Santos</Text>
    <Text style={styles.textotitulo}>• Monitora</Text>
    <Text style={styles.texto3}>Fatec - Santos/Rubens Lara</Text>
    
  </View>

</View>
  );
}