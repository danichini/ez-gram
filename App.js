import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RutasNoAutenticadas from './Components/NoAutenticados/RutasNoAutenticadas';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: 'instagramClone',
    };
  }

  render() {
    const { nombre } = this.state;
    return (
      <View style={styles.container}>
        <RutasNoAutenticadas />
        <Text>{nombre}</Text>
      </View>
    );
  }
}
