import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SplashScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SplashScreen</Text>
      <Button 
        title='go to home'
        onPress={() => navigation.navigate('Drawer')}
      />
      <Button 
        title='go to login'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}