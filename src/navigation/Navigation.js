import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppStack from './AppStack';
import AuthCheck from './AuthCheck';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'AuthCheck'}>
        <Stack.Screen
          name={'AuthCheck'}
          component={AuthCheck}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={'AuthStack'}
          component={AuthStack}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={'AppStack'}
          options={{headerShown: false}}
          component={AppStack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
