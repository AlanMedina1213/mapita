// navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack.js';
import Contact from '../screens/Contact.js';
import Visitors from '../screens/Visitors.js';
import About from '../screens/About.js';
import Help from '../screens/Help.js';
import Settings from '../screens/Settings.js';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainStack} />

      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Visitors" component={Visitors} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
