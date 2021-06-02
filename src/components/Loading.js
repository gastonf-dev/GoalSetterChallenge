/**
 * @flow stric-local
 * @format
 */

import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import COLORS from '../styles/Colors';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={COLORS.lightblue} size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
