import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import './config/reactotron';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="orange" />
        <Routes />
      </>
    );
  }
}

export default App;
