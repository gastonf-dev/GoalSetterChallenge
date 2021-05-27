/**
 * @flow stric-local
 * @format
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../styles/Colors';

type Props = {
  title: string,
  onPress: function,
};
const Link = ({title, onPress}: Props): Node => {
  return (
    <Text style={styles.link} onPress={onPress}>
      {title}
    </Text>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: {
    fontFamily: 'AvenirLTStd',
    fontSize: 14,
    color: COLORS.lightblue,
  },
});
