import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

//import { FontAwesome } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles';


export default class Engine extends Component {
  handleClick = () => {
    this.props.changeEngine(this.props.position);
  }

  render() {
    const iconStyle = [styles.icon];
    if (this.props.position === this.props.engineSelected) {
      iconStyle.push(styles.iconChosen);
    }

    return (
      <TouchableHighlight
        onPress={this.handleClick}
        underlayColor="transparent"
      >
        <Icon
          name={this.props.engine.icon}
          style={iconStyle}
          color="white"
          size={32}
        />
      </TouchableHighlight>
    );
  }
}

Engine.propTypes = {
  engineSelected: PropTypes.number,
  changeEngine: PropTypes.func,
  engine: PropTypes.object,
  position: PropTypes.number,
};
