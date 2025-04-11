// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../screens/Mainpage.js';
import Explore from '../screens/Explore.js'; // nueva screen
import Search from '../screens/Search.js';
import Profile from '../screens/Profile.js';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="MainPage">
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
