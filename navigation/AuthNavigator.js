import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import DrawerNavigator from "./DrawerNavigator";
import Visitors from "../screens/Visitors";
import Settings from "../screens/Settings.js";
import PrivacyPolicy from '../screens/PrivacyPolicy.js';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Visitors" component={Visitors} />
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'Privacy Policy' }} />
    </Stack.Navigator>
  );
}
