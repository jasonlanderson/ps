import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Image, TouchableHighlight } from 'react-native';
import { InputWithButton } from '../TextInput';

import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default class Header extends Component {
  handleBack = () => {
    this.props.navBack();
  };

  handleBrowserBack = () => {
    this.props.browserBack();
  }

  render() {
    let backButtonColor = 'lightgray';
    if (this.props.browserCanGoBack) {
      backButtonColor = 'gray';
    }

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.handleBack}
          underlayColor="transparent"
        >
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('./images/icon48.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.handleBrowserBack}
          disabled={!this.props.browserCanGoBack}
          underlayColor="transparent"
        >
          <FontAwesome
            name="arrow-left"
            style={styles.backButtonIcon}
            color={backButtonColor}
            size={32}
          />
        </TouchableHighlight>
        <InputWithButton
          onPress={this.props.onPress}
          onSubmitEditing={this.props.onSubmitEditing}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}

Header.propTypes = {
  goBack: PropTypes.func,
  onPress: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onChangeText: PropTypes.func,
  value: PropTypes.string,

};
