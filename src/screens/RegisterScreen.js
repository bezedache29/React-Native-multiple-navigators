import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import RegisterSVG from '../assets/images/svg/registration.svg'
import GoogleSVG from '../assets/images/svg/google.svg'
import FacebookSVG from '../assets/images/svg/facebook.svg'
import TwitterSVG from '../assets/images/svg/twitter.svg'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'

export default function RegisterScreen({ navigation }) {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [inputDate, setInputDate] = useState('Date of Birth')

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <RegisterSVG width={300} height={300} style={{ transform: [{rotate: '-5deg'}] }} />
        </View>
        <Text style={{ fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30 }}>Register</Text>

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

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>Or, register with email ...</Text>

        <InputField
          label='Full Name'
          icon={<Ionicons name='person-outline' size={20} color='#666' style={{ marginRight: 5 }} />}
        />

        <InputField
          label='Email ID'
          icon={<MaterialIcons name='alternate-email' size={20} color='#666' />}
          keyboardType='email-address'
        />

        <InputField
          label='Password'
          icon={<Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{ marginRight: 5 }} />}
          inputType='password'
        />

        <InputField
          label='Confirm Password'
          icon={<Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{ marginRight: 5 }} />}
          inputType='password'
        />

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 30 }}>
          <Ionicons name='calendar-outline' size={20} color='#666' style={{ marginRight: 5 }} />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{ color: '#666', marginLeft: 5, marginTop: 5 }}>{inputDate}</Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          mode='date'
          locale='fr-FR'
          minimumDate={new Date('1980-01-01')}
          maximumDate={new Date()}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            setInputDate(date.toDateString())
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />

        <CustomButton label="Register" onPress={() => {}} />

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
          <Text>Already registered ?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: '#AD40AF', fontWeight: '700', marginLeft: 5 }}>Login</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      
    </SafeAreaView>
  )
}