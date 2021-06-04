/**
 * @flow stric-local
 * @format
 */

import React from 'react';
import type {Node} from 'react';

import {Image, Platform, StyleSheet, Text, View} from 'react-native';

const IMAGE_ILLUSTRATION = require('../assets/images/illustrationMoney.png');
const IMAGE_FLYING_MONEY = require('../assets/images/flyingMoney.png');

const TermsOfService = (): Node => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={IMAGE_ILLUSTRATION} style={styles.bottomImage} />
        <Image source={IMAGE_FLYING_MONEY} style={styles.topImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'}
          {'\n'}
          1. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.n. {'\n'}
          {'\n'}
          2. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. {'\n'}
          {'\n'}
          3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
    </View>
  );
};

export default TermsOfService;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 24,
  },
  bottomImage: {
    alignSelf: 'center',
  },
  topImage: {
    position: 'absolute',
    alignSelf: 'center',
  },
  textContainer: {
    padding: 24,
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 16,
  },
});
