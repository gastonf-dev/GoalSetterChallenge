/**
 * @flow stric-local
 * @format
 */
import React, {useEffect} from 'react';
import type {Node} from 'react';

import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import COLORS from '../styles/Colors';
import Button from '../components/Button';

import {useNavigation} from '@react-navigation/core';

const IMAGE_BANK = require('../assets/images/bank.png');

const LinkBank = (): Node => {
  const navigation = useNavigation();

  // disable back button
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      return;
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
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
  container: {flex: 1},
  imageContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  textContainer: {
    padding: 24,
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.darkviolet,
    marginBottom: 24,
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
});
