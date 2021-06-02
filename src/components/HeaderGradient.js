/**
 * @flow stric-local
 * @format
 */


import React from 'react';
import type {Node} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderGradient = (): Node => {
  return (
    <LinearGradient
      colors={['#8D24C4', '#500F71']}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
    />
  );
};

export default HeaderGradient;

const styles = StyleSheet.create({});
