import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, WebView, View, Keyboard } from 'react-native';
import { connectAlert } from '../components/Alert';
import { Header } from '../components/Header';


class Browse extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  constructor(props) {
    super(props);
    const { query, engine } = this.props.navigation.state.params;
    this.state = { textInput: query, query, engine };
  }

  handleChangeText = (text) => {
    this.setState({ textInput: text });
  };

  handleSearch = () => {
    this.setState({ query: this.state.textInput });
    Keyboard.dismiss();
  };

  displayWeb() {
    const { engine } = this.props.navigation.state.params;

    const destination = engine + this.state.query;

    return (
      <WebView
        source={{ uri: destination }}
        style={{ }}
        javaScriptEnabled
        domStorageEnabled
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <Header
          onPress={this.handleSearch}
          onSubmitEditing={this.handleSearch}
          onChangeText={this.handleChangeText}
          goBack={this.props.navigation.goBack}
        />
        {this.displayWeb()}
      </View>
    );
  }
}
export default connectAlert(Browse);
