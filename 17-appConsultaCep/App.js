import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from './src/service/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: [],
      cepValor: '',
      valorRetorno: '',
    };
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorCep = this.state.cepValor;
    const response = await api.get(`ws/${valorCep}/json`);
    this.setState({
      cep: response.data,
    });
    this.setState({
      valorRetorno: `
        CEP: ${this.state.cep.cep} \n
        LOGRADOURO: ${this.state.cep.logradouro} \n
        BAIRRO: ${this.state.cep.bairro} \n
        CIDADE: ${this.state.cep.localidade} \n
        ESTADO: ${this.state.cep.uf}
      `,
    });
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.titulo}>Busca CEP</Text>
          <MaterialCommunityIcons
            style={{ marginLeft: 10 }}
            name="map-search"
            size={35}
            color={'#F8485E'}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Informe o CEP: "
            style={styles.input}
            onChangeText={(value) => this.setState({ cepValor: value })}
            keyboardType="numeric"
          />

          <TouchableOpacity onPress={this.retorno}>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="map-marker-radius"
              size={40}
              color={'#00C1D4'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Text style={{ color: '#EEEEEE', fontSize: 16 }}>
            Informações do endereço:{'\n'}
            {this.state.valorRetorno}
          </Text>
        </View>
        <View style={styles.box1}>
          <Text style={{ color: '#EEEEEE', fontSize: 16 }}>
            {this.state.valorRetorno}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    backgroundColor: '#EEEEEE',
  },
  titulo: {
    fontSize: 25,
    marginBottom: 50,
    color: '#00C1D4',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    fontSize: 20,
    padding: 10,
    width: 325,
    backgroundColor: '#EEEEEE',
    borderColor: '#F8485E',
    borderWidth: 2,
    borderRadius: 10,
    color: '#F8485E',
  },
  box: {
    backgroundColor: '#00C1D4',
    color: 'white',
    marginTop: 100,
    margin: 20,
    borderRadius: 20,
    padding: 20,
    borderColor: '#F8485E',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  box1: {
    backgroundColor: '#00C1D4',
    color: 'white',
    marginTop: 600,
    margin: 20,
  },
});

export default App;
