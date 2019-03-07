import React, { Component, createRef, RefObject } from 'react';
import { WebView } from 'react-native';
import html from './html/index.html';

interface Props {
  color?: string;
}

export default class MyInlineWeb extends Component<Props> {
  private webViewRef: RefObject<WebView> = createRef();

  public componentDidUpdate() {
    this.passColor();
  }

  public render() {
    return (
      <WebView
        onLoad={this.handleLoad}
        originWhitelist={['*']}
        ref={this.webViewRef}
        source={html}
      />
    );
  }

  private handleLoad = () => {
    this.passColor();
  };

  private passColor = () => {
    const { color = 'yellow' } = this.props;
    const webView = this.webViewRef.current;
    if (webView === null) {
      return;
    }
    webView.postMessage(color);
  };
}
