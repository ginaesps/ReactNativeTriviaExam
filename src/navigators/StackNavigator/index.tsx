/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/LoginScreen';
import QuestionScreen from '../../screens/QuestionScreen';
import { LoginInterface } from '../../interfaces/interface';

export type MainParams = {
  Splash: undefined,
  Login: undefined,
  Question: undefined,
  NameInterface: LoginInterface;
}

const Stack = createNativeStackNavigator();

const Component = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Question" component={QuestionScreen} />
    </Stack.Navigator>
  );
};

export default Component;
