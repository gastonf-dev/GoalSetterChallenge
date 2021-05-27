/**
 * @flow stric-local
 * @format
 */
import React from 'react';
import type {Node} from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import COLORS from '../styles/Colors';
import Button from '../components/Button';

const IMAGE_BANK = require('../assets/images/bank.png');

const LinkBank = (): Node => {
  return (
    <View>
      <Header title="Link your bank!" />
      <View style={styles.imageContainer}>
        <Image source={IMAGE_BANK} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Family banking</Text>
        <Text style={styles.text}>
          Linking your bank lets you use all of Goalsetter’s amazing features.
          Every member of your family can save, gift, learn, earn, and spend
          money... smartly.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="LINK A BANK"
          onPress={() => console.log('button on press')}
          large
        />
      </View>
    </View>
  );
};

export default LinkBank;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  textContainer: {
    padding: 24,
  },
  title: {
    fontFamily: 'AvenirLTStd',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.darkviolet,
  },
  text: {
    fontFamily: 'AvenirLTStd',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
});
