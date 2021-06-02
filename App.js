import * as React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/MainNavigator';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
