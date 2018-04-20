import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { Header } from '../components/Header';


class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleChangeText = (text) => {
    this.setState({ query: text });
  };

  handleSearch = () => {
    this.props.navigation.navigate('Browse', { query: this.state.query });
    Keyboard.dismiss();
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            onPress={this.handleSearch}
            onSubmitEditing={this.handleSearch}
            onChangeText={this.handleChangeText}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
