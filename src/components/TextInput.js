/**
 * @flow stric-local
 * @format
 */
import React, {useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  Image,
} from 'react-native';
import COLORS from '../styles/Colors';

const ICONS = {
  person: require('../assets/images/person.png'),
  email: require('../assets/images/emailIcon.png'),
  password: require('../assets/images/passwordIcon.png'),
};

type Props = {
  label: string,
  placeholder: string,
  type: 'person' | 'email' | 'password',
};

const TextInput = ({label, placeholder, type}: Props): Node => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <View
      style={[
        styles.container,
        isFocused ? {borderBottomColor: COLORS.lightblue} : null,
      ]}>
      <Image source={ICONS[type]} style={styles.icon} />
      <View style={styles.textInputContainer}>
        {isFocused || value.length !== 0 ? (
          <Text style={styles.label}>{label}</Text>
        ) : null}
        <TextInputRN
          style={styles.textInput}
          placeholder={isFocused ? undefined : placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={type === 'password'}
          onChangeText={setValue}
          value={value}
        />
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginHorizontal: 38,
    marginVertical: 16,
    // Apply fontFamily to all nest components
    fontFamily: 'AvenirLTStd',
    fontWeight: 'bold',
  },
  textInputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textInput: {
    fontSize: 14,
    color: COLORS.lightblue,
  },
  label: {
    fontSize: 10,
    color: COLORS.gray,
  },
  icon: {
    marginRight: 12,
    tintColor: COLORS.gray,
  },
});
