import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import ProfileScreen from './../screens/ProfileScreen';
import HomeScreen from './../screens/HomeScreen';
import MessagesScreen from './../screens/MessagesScreen';
import MomentsScreen from './../screens/MomentsScreen';
import SettingsScreen from './../screens/SettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} />} 
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15
        }
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ 
        drawerIcon: ({ color }) => (
          <Ionicons name="home-outline" size={22} color={color} />
        )
       }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ 
        drawerIcon: ({ color }) => (
          <Ionicons name="person-outline" size={22} color={color} />
        )
       }} />
      <Drawer.Screen name="Messages" component={MessagesScreen} options={{ 
        drawerIcon: ({ color }) => (
          <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
        )
       }} />
      <Drawer.Screen name="Moments" component={MomentsScreen} options={{ 
        drawerIcon: ({ color }) => (
          <Ionicons name="timer-outline" size={22} color={color} />
        )
       }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ 
        drawerIcon: ({ color }) => (
          <Ionicons name="settings-outline" size={22} color={color} />
        )
       }} />
    </Drawer.Navigator>
  )
}