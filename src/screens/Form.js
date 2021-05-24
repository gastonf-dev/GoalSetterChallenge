/**
 * @flow stric-local
 * @format
 */
import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInput from '../components/TextInput';

const Form = (): Node => {
  return (
    <View>
      <TextInput label="First name" placeholder="First name" type="person" />
      <TextInput label="Last name" placeholder="Last name" type="person" />
      <TextInput label="Email" placeholder="Email" type="email" />
      <TextInput label="Password" placeholder="Password" type='password' />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
