// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../screens/Mainpage.js';
<<<<<<< HEAD
import Explore from '../screens/Explore.js';
import Search from '../screens/Search.js';
import Profile from '../screens/Profile.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
=======
import Explore from '../screens/Explore.js'; // nueva screen
import Search from '../screens/Search.js';
import Profile from '../screens/Profile.js';
>>>>>>> b0790072320257c117cbf4465b00de0988df263d

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
<<<<<<< HEAD
    <Tab.Navigator
  initialRouteName="MainPage"
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'MainPage') {
        iconName = 'home';
      } else if (route.name === 'Explore') {
        iconName = 'compass';
      } else if (route.name === 'Search') {
        iconName = 'map-search';
      } else if (route.name === 'Profile') {
        iconName = 'account';
      }

      return (
        <MaterialCommunityIcons
          name={iconName}
          size={size}
          color={color}
        />
      );
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  })}
>
  <Tab.Screen
    name="MainPage"
    component={MainPage}
    options={{ tabBarLabel: 'Home' }} 
  />
  <Tab.Screen name="Explore" component={Explore} />
  <Tab.Screen name="Search" component={Search} />
  <Tab.Screen name="Profile" component={Profile} />
</Tab.Navigator>

=======
    <Tab.Navigator initialRouteName="MainPage">
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  );
}
