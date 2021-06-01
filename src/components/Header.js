/**
 * @flow stric-local
 * @format
 */

import React from 'react';
import type {Node} from 'react';

import {ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const IMAGE_HEADER = require('../assets/images/background.png');

type Props = {
  title: string,
  subtitle?: string,
};
const Header = ({title, subtitle}: Props): Node => {
  return (
    <>
      <ImageBackground source={IMAGE_HEADER} style={styles.imageHeader}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </ImageBackground>
    </>
  );
};

export default Header;

var styles = StyleSheet.create({
  imageHeader: {
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: 'white',
    marginTop: 12,
  },
});
