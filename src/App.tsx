import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyInlineWeb from './components/MyInlineWeb';

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <MyInlineWeb />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
