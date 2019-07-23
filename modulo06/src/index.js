import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
