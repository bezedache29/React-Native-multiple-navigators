import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppDrawer from './AppDrawer';
import AppStack from './AppStack';

export default function AppRouter() {
  return (
    <NavigationContainer>
      {/* <AppDrawer /> */}
      <AppStack />
    </NavigationContainer>
  )
}