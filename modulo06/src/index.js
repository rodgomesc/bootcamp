import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#7120c1" />
        <Routes />
      </>
    );
  }
}
