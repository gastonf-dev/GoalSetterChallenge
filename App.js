import * as React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Form from './src/screens/Form';
import TermsOfService from './src/screens/TermsOfService';
import Header from './src/components/Header';
import LinkBank from './src/screens/LinkBank';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderGradient from './src/components/HeaderGradient';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen
            name="Form"
            component={Form}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LinkBank"
            component={LinkBank}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TermsOfService"
            component={TermsOfService}
            options={{
              title: 'Terms of service',
              headerBackground: () => <HeaderGradient />,
              headerTitleStyle: styles.headerTitle,
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
  },
});

export default App;
