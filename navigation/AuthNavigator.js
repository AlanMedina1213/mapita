import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import DrawerNavigator from './DrawerNavigator';
<<<<<<< HEAD
import Visitors from '../screens/Visitors';
=======
>>>>>>> b0790072320257c117cbf4465b00de0988df263d

const Stack = createNativeStackNavigator(); 

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
<<<<<<< HEAD
      <Stack.Screen name="Visitors" component={Visitors} /> 
=======
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
      <Stack.Screen name="Main" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
