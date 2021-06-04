import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderGradient from '../components/HeaderGradient';

import CreateAccount from '../screens/CreateAccount';
import LinkBank from '../screens/LinkBank';
import TermsOfService from '../screens/TermsOfService';

const Stack = createStackNavigator();

const backImage = require('../assets/images/chevronLeft.png');

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
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
          headerBackImage: ({tintColor}) => <Image source={backImage} />,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
  },
});
