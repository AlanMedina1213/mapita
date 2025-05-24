// navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack.js';
import Contact from '../screens/Contact.js';
import Visitors from '../screens/Visitors.js';
import About from '../screens/About.js';
import Help from '../screens/Help.js';
import Settings from '../screens/Settings.js';
import PrivacyPolicy from '../screens/PrivacyPolicy.js';
import VisitorList from "../screens/VisitorList.js";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainStack} options={{ title: 'Home' }}  />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Visitors" component={Visitors} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'Privacy Policy' }} />
      <Drawer.Screen name="VisitorList" component={VisitorList} options={{ title: "Visitor Records" }} />
    </Drawer.Navigator>
  );
}
