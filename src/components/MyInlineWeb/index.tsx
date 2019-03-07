import React, { Component } from 'react';
import { WebView } from 'react-native';
import html from './html/index.html';

export default class MyInlineWeb extends Component {
  public render() {
    return <WebView originWhitelist={['*']} source={html} />;
  }
}
