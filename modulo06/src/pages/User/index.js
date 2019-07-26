import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

export default function User({ navigation }) {
  const user = navigation.getParam('user');

  return <Container />;
}
