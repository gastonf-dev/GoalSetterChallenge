/**
 * @flow stric-local
 * @format
 */
import React from 'react';
import type {Node} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Formik} from 'formik';
import * as Yup from 'yup';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import COLORS from '../styles/Colors';
import Link from '../components/Link';

const FORM_SCHEMA = Yup.object().shape({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4, 'Too Short!').required('Required'),
});

const FORM_INITIAL_VALUES = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

const IMAGE_HEADER = require('../assets/images/background.png');

const Form = (): Node => {
  return (
    <KeyboardAwareScrollView>
      <View>
        <ImageBackground source={IMAGE_HEADER} style={styles.imageHeader}>
          <Text style={styles.title}>Create Your Account</Text>
          <Text style={styles.subtitle}>
            You can be a parent, godparent, grandparent or even a favorite aunt.
            We’ll add the kids after!
          </Text>
        </ImageBackground>
      </View>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={values => console.log('values', values)}
        validationSchema={FORM_SCHEMA}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
          isValid,
          dirty,
        }) => {
          console.log('🚀 ~ file: Form.js ~ line 69 ~ Form ~ dirty', dirty);
          console.log('🚀 ~ file: Form.js ~ line 68 ~ Form ~ isValid', isValid);
          return (
            <View style={styles.formContainer}>
              <TextInput
                label="First name"
                placeholder="First name"
                type="person"
                value={values.firstname}
                handleChange={handleChange('firstname')}
                handleBlur={handleBlur('firstname')}
                error={errors.firstname}
                touched={touched.firstname}
                name="firstname"
              />

              <TextInput
                label="Last name"
                placeholder="Last name"
                type="person"
                value={values.lastname}
                handleChange={handleChange('lastname')}
                handleBlur={handleBlur('lastname')}
                error={errors.lastname}
                touched={touched.lastname}
                name="lastname"
              />

              <TextInput
                label="Email"
                placeholder="Email"
                type="email"
                value={values.email}
                handleChange={handleChange('email')}
                handleBlur={handleBlur('email')}
                error={errors.email}
                touched={touched.email}
                name="email"
              />

              <TextInput
                label="Password"
                placeholder="Password"
                type="password"
                value={values.password}
                handleChange={handleChange('password')}
                handleBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
                name="password"
              />

              <View style={styles.bottomContainer}>
                <View style={styles.adviceContainer}>
                  <Text style={styles.adviceText}>
                    By creating this account, I agree that I am a U.S. resident,
                    18 years or older with a valid bank account. I agree to
                    Goalsetter’s
                    <Link
                      title="Terms of Service"
                      onPress={() => console.log('link on press')}
                    />
                  </Text>
                </View>
                <Button
                  title="CREATE FREE ACCOUNT"
                  onPress={() => console.log('button on press')}
                  disabled={!(isValid && dirty)}
                />
              </View>
            </View>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  imageHeader: {
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontFamily: 'AvenirLTStd',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: 'white',
    marginVertical: 12,
  },
  subtitle: {
    fontFamily: 'AvenirLTStd',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: 'white',
  },
  formContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
  },
  adviceContainer: {
    marginHorizontal: 24,
  },
  adviceText: {
    fontFamily: 'AvenirLTStd',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.4,
  },
 
});
