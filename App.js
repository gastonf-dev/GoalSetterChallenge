/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Form from './src/screens/Form';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
