import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from 'color';

import styles from './styles';


class InputWithButton extends Component {
  handleChangeText = (text) => {
    this.props.onChangeText(text);
  };

  render() {
    const underlayColor = color(styles.$buttonBackgroundColorBase)
      .darken(styles.$buttonBackgroundColorModifier);

    const containerStyles = [styles.container];
    if (this.props.editable === false) {
      containerStyles.push(styles.containerDisabled);
    }

    return (
      <View style={containerStyles}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={this.handleChangeText}
          value={this.props.value}
          {...this.props}
        />
        <View style={styles.separator} />

        <TouchableHighlight
          onPress={this.props.onPress}
          style={styles.buttonContainer}
          underlayColor={underlayColor}
        >
          <Ionicons name="ios-search" size={32} />
        </TouchableHighlight>
      </View>
    );
  }
}


InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};

export default InputWithButton;
