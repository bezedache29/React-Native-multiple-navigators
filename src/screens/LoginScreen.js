import { View, Text, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import LoginSVG from '../assets/images/svg/login.svg'
import GoogleSVG from '../assets/images/svg/google.svg'
import FacebookSVG from '../assets/images/svg/facebook.svg'
import TwitterSVG from '../assets/images/svg/twitter.svg'
import CustomButton from '../components/CustomButton'
import InputField from '../components/InputField'

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <LoginSVG width={300} height={300} style={{ transform: [{rotate: '-5deg'}] }} />
        </View>
        <Text style={{ fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30 }}>Login</Text>

        <InputField 
          label="Email ID"
          icon={<MaterialIcons name='alternate-email' size={20} color='#666' />}
        />

        <InputField 
          label="Password"
          icon={<Ionicons name='ios-lock-closed-outline' size={20} color='#666' />}
          inputType="password"
          fieldButtonLabel="Forgot ?"
          fieldButtonFunction={() => {}}
        />

        <CustomButton label="Login" onPress={() => {}} />

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>Or, Login with ...</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
          <TouchableOpacity onPress={() => {}} style={{ borderColor: '#ddd', borderWidth: 2, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 10 }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={{ borderColor: '#ddd', borderWidth: 2, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 10 }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={{ borderColor: '#ddd', borderWidth: 2, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 10 }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
          <Text>New to the app ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#AD40AF', fontWeight: '700', marginLeft: 5 }}>Register</Text>
          </TouchableOpacity>
        </View>

      </View>
      
    </SafeAreaView>
  )
}