import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, WebView, View, Keyboard } from 'react-native';
import { connectAlert } from '../components/Alert';
import { Header } from '../components/Header';

const WEBVIEW_REF = 'WEBVIEW_REF';

class Browse extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.onBrowserNavigationStateChange = this.onBrowserNavigationStateChange.bind(this);
    this.browserBack = this.browserBack.bind(this);

    const { query } = this.props.navigation.state.params;
    this.state = {
      textInput: query,
      query,
      browserCanGoBack: false
    };
  }s

  handleSearch = () => {
    this.setState({ query: this.state.textInput });

    Keyboard.dismiss();
  };

  handleChangeText = (text) => {
    this.setState({ textInput: text });
  };

  // Function which is called when the browser component changes state
  // Tells when the back button should be enabled
  onBrowserNavigationStateChange(navState) {
    this.setState({
      browserCanGoBack: navState.canGoBack
    });
  }

  displayWeb() {
    const { engine } = this.props.navigation.state.params;

    const destination = engine + this.state.query;

    return (
      <WebView
        source={{ uri: destination }}
        style={{ }}
        ref={WEBVIEW_REF}
        onNavigationStateChange={this.onBrowserNavigationStateChange}
        javaScriptEnabled
        domStorageEnabled
      />
    );
  }

  browserBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <Header
          onPress={this.handleSearch}
          onSubmitEditing={this.handleSearch}
          onChangeText={this.handleChangeText}
          navBack={this.props.navigation.goBack}
          browserBack={this.browserBack}
          browserCanGoBack={this.state.browserCanGoBack}
          value={this.state.textInput}
        />
        {this.displayWeb()}
      </View>
    );
  }
}
export default connectAlert(Browse);
