import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator(); 

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
