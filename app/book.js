import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { BookAppointment } from '../components'
import { View } from 'react-native'
import BottomNav from '../components/BottomNavigation/BottomNav'
import Background from '../components/Background'

function Book() {
  return (
    <SafeAreaView>

    <Stack.Screen
    options={{headerShown:false}}
    headerTitle=''
    />

    <ScrollView showsVerticalScrollIndicator={false}>
    <Background>
          <BookAppointment />
          <BottomNav />
    </Background>
    </ScrollView>
       
    </SafeAreaView>
  )
}

export default Book;