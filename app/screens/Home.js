import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { Engines } from '../components/Engines';
import resources from '../config/resources';


class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = { query: '', engineSelected: 0 };
  }

  handleChangeText = (text) => {
    this.setState({ query: text });
  };

  handleIcon = () => {
    const engineLink = resources[this.state.engineSelected].link;
    this.props.navigation.navigate('Browse', {
      query: this.state.query,
      engine: engineLink,
      handleChangeText: this.handleChangeText,
    });
    Keyboard.dismiss();
  }

  changeEngine = (number) => {
    this.setState({ engineSelected: number });
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
            value={this.state.query}
            placeholder=""
          />
        </KeyboardAvoidingView>
        <Engines
          changeEngine={this.changeEngine}
          engineSelected={this.state.engineSelected}
        />
      </Container>
    );
  }
}

export default Home;
