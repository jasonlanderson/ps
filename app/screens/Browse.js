import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, WebView, View } from 'react-native';
import { connectAlert } from '../components/Alert';

class Browse extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const { query } = this.props.navigation.state.params;

    const destination = `https://www.google.com/search?q=${query}`;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <WebView
          source={{ uri: destination }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
export default connectAlert(Browse);
