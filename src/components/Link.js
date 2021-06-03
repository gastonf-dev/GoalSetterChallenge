/**
 * @flow stric-local
 * @format
 */

import React from 'react';
import type {Node} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import COLORS from '../styles/Colors';

type Props = {
  title: string,
  onPress: () => mixed,
};
const Link = ({title, onPress}: Props): Node => {
  return (
    <Text style={styles.link} onPress={onPress} testID="link">
      {'\b'}
      {title}
    </Text>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontSize: 14,
    color: COLORS.lightblue,
  },
});
