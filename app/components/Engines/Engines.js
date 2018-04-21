import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import resources from '../../config/resources';
import Engine from './Engine';


import styles from './styles';


export default class Engines extends Component {
  renderEngines = () => resources.map((engine, i) => (
    <Engine
      engine={engine}
      engineSelected={this.props.engineSelected}
      handlePress={this.handlePress}
      changeEngine={this.props.changeEngine}
      key={engine.link}
      position={i}
    />
  ));

  render() {
    return (
      <View style={styles.container}>
        {this.renderEngines()}
      </View>
    );
  }
}

Engines.propTypes = {
  engineSelected: PropTypes.number,
  changeEngine: PropTypes.func,
};

