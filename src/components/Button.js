/**
 * @flow stric-local
 * @format
 */

import React from 'react';
import type {Node} from 'react';

import {TouchableOpacity, StyleSheet, Text, Platform} from 'react-native';
import COLORS from '../styles/Colors';

type Props = {
  title: string,
  onPress: () => mixed,
  disabled?: boolean,
  large?: boolean,
};

const Button = ({title, onPress, disabled, large}: Props): Node => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          disabled ? {backgroundColor: COLORS.gray} : null,
          large ? {width: '90%'} : null,
        ]}
        onPress={onPress}
        disabled={disabled}
        testID="button">
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.green,
    width: '60%',
    alignSelf: 'center',
    marginTop: 24,
  },
  buttonText: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 12,
  },
});
