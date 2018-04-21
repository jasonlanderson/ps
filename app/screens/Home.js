import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { Engines } from '../components/Engines';


class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = { query: '', engine: 'https://www.google.com/search?q=' };
  }

  handleChangeText = (text) => {
    this.setState({ query: text });
  };

  handleSearch = (engine) => {
    this.props.navigation.navigate('Browse', { query: this.state.query, engine });
    Keyboard.dismiss();
  };

  handleIcon = () => {
    this.props.navigation.navigate('Browse', { query: this.state.query, engine: this.state.engine });
    Keyboard.dismiss();
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            onPress={this.handleIcon}
            onSubmitEditing={this.handleIcon}
            onChangeText={this.handleChangeText}
          />
        </KeyboardAvoidingView>
        <Engines
          onPress={this.handleSearch}
        />
      </Container>
    );
  }
}

export default Home;
