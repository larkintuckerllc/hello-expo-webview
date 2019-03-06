import React, { PureComponent } from 'react';
import { WebView } from 'react-native';

// tslint:disable-next-line
const html = require('./html/index.html');

export default class Chart extends PureComponent {
  public render() {
    // return <WebView originWhitelist={['*']} source={{ html: '<h1>Hello world</h1>' }} />;
    return <WebView originWhitelist={['*']} source={html} />;
  }
}
