/**
 * @flow stric-local
 * @format
 */
import React from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import TextInput from '../components/TextInput';

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

const Form = (): Node => {
  return (
    <View>
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
        }) => {
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

              <Button
                title="Submit"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
