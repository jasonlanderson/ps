import React from 'react';
import PropTypes from 'prop-types';

import { View, Image, TouchableHighlight } from 'react-native';
import { InputWithButton } from '../TextInput';


import styles from './styles';


const Header = (props) => {
  handleBack = () => {
    props.goBack();
  };

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
      <InputWithButton
        onPress={props.onPress}
        onSubmitEditing={props.onSubmitEditing}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

Header.propTypes = {
  goBack: PropTypes.func,
  onPress: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onChangeText: PropTypes.func,

};


export default Header;
