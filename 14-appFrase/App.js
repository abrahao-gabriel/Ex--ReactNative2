import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      status2: 0,
    };
  }

  async componentDidMount() {
    await AsyncStorage.getItem('status').then((value) => {
      this.setState({ status: JSON.parse(value) });
    });

    await AsyncStorage.getItem('status2').then((value2) => {
      this.setState({ status2: JSON.parse(value2) });
    });
  }

  async componentDidUpdate(_, prevState) {
    const status = this.state.status;
    const status2 = this.state.status2;

    await AsyncStorage.setItem('status', JSON.stringify(status));
    await AsyncStorage.setItem('status2', JSON.stringify(status2));
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: `${this.state.status == 1 ? 'black' : 'white'}`,
          paddingTop: 50,
        }}>
        <ScrollView>
          <Text
            style={{
              backgroundColor: `${this.state.status == 1 ? 'white' : 'black'}`,
              color: `${this.state.status == 1 ? 'black' : 'white'}`,
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              paddingTop: 35,
              padding: 10,
            }}>
            Frases
          </Text>

          <View style={styles.inline}>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                  color: `${this.state.status == 1 ? 'white' : 'black'}`,
                }}
                name="weather-night"
                size={35}
              />
              <Switch
                value={this.state.status == 1 ? true : false}
                onValueChange={(valorSwitch) =>
                  this.setState({ status: valorSwitch ? 1 : 0 })
                }
                thumbColor={this.state.status == 0 ? 'black' : 'white'}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Octicons
                style={{
                  marginRight: 10,
                  color: `${this.state.status == 1 ? 'white' : 'black'}`,
                }}
                name="text-size"
                size={35}
              />
              <Switch
                value={this.state.status2 == 1 ? true : false}
                onValueChange={(valorSwitch) =>
                  this.setState({ status2: valorSwitch ? 1 : 0 })
                }
                thumbColor={this.state.status2 == 0 ? 'black' : 'white'}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: Number(`${this.state.status2 == 1 ? 20 : 15}`),
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            "Envelhecer e morrer é o que dá sentido e beleza ao tempo fugaz de uma vida humana. {'\n'}É exatamente porque envelhecemos e morremos que nossas vidas têm valor e nobreza."{'\n'}
          </Text>
          <Text
            style={{
              fontSize: Number(`${this.state.status2 == 1 ? 20 : 15}`),
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - Kyojuro Rengoku
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#fff',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 50,
  },
});

export default App;
