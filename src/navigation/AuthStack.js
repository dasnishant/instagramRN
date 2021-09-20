import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';

import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen
        name="login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="signup"
        options={{headerShown: false}}
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
