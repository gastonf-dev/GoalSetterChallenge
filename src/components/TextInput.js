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
  value: string,
  handleChange: function,
  handleBlur: function,
  error: string,
  touched: boolean,
  name: string,
};

const TextInput = ({
  label,
  placeholder,
  type,
  handleBlur,
  handleChange,
  value,
  name,
  error,
  touched,
}: Props): Node => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        isFocused ? {borderBottomColor: COLORS.lightblue} : null,
        (type == 'email' || type == 'password') && error && touched
          ? {borderBottomColor: COLORS.red}
          : null,
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
          onBlur={event => {
            setIsFocused(false);
            handleBlur(event);
          }}
          secureTextEntry={type === 'password'}
          onChangeText={handleChange}
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
    marginVertical: 12,

    paddingVertical: 6,
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
    width: '100%',
  },
  label: {
    fontSize: 10,
    color: COLORS.gray,
    marginVertical: 6
  },
  icon: {
    marginRight: 12,
    tintColor: COLORS.gray,
  },
});
