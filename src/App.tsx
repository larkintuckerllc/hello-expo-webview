import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chart from './components/Chart';

export default class App extends React.Component {
  public render() {
    /*
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Chart />
      </View>
    );
    */
    return (
      <View style={styles.container}>
        <View style={styles.containerTop} />
        <Chart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',
  },
  containerTop: {
    height: 100,
  },
});
