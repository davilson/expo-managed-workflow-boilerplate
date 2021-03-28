import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from '../components/pages/Main';

const Stack = createStackNavigator();

const MyStack = () => (
  <Stack.Navigator initialRouteName="Main" headerMode="none">
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
