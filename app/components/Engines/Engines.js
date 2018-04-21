import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


import styles from './styles';

const Engines = (props) => {
// Todo: single function to handle this with an engine constants file so we can add new things easier

  googlePress = () => {
    props.onPress('https://www.google.com/search?q=');
  };

  amazonPress = () => {
    props.onPress('https://www.amazon.com/s/?field-keywords=');
  };


  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={this.googlePress}
        underlayColor="transparent"
      >
        <FontAwesome name="google" style={styles.google} color="white" size={32} />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={this.amazonPress}
        underlayColor="transparent"
      >
        <FontAwesome name="amazon" style={styles.amazon} color="white" size={32} />
      </TouchableHighlight>
    </View>
  );
};

Engines.propTypes = {
  onPress: PropTypes.func,
};

export default Engines;
