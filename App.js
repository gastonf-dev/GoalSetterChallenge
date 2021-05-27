import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Form from './src/screens/Form';
import TermsOfService from './src/screens/TermsOfService';
import LinearGradient from 'react-native-linear-gradient';
import Header from './src/components/Header';
import LinkBank from './src/screens/LinkBank';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
            headerBackground: () => (
              <LinearGradient
                colors={['#8D24C4', '#500F71']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'AvenirLTStd',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
  },
});

export default App;
