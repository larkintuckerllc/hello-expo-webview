import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyInlineWeb from './components/MyInlineWeb';

interface State {
  color: string;
}

export default class App extends React.Component<{}, State> {
  public state = {
    color: 'yellow',
  };

  public render() {
    const { color } = this.state;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={this.handleYellowPress} title="yellow" />
        <Button onPress={this.handleRedPress} title="red" />
        <MyInlineWeb color={color} />
      </View>
    );
  }

  private handleYellowPress = () => {
    this.setState({ color: 'yellow' });
  };

  private handleRedPress = () => {
    this.setState({ color: 'red' });
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
