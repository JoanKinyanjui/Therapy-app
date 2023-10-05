import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { BookAppointment } from '../components'
import { View } from 'react-native'
import BottomNav from '../components/BottomNavigation/BottomNav'
import Background from '../components/Background'
import CustomHeader from '../components/CustomHeader/CustomHeader'

function Book() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{ headerShown: false }} />

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 70 }}
      style={{ flex: 1 }}
    >
      <Background>
        <BookAppointment />
      </Background>
    </ScrollView>
    <CustomHeader title="Book Appointment" showBackButton/>
    <BottomNav />
  </SafeAreaView>
  )
}

export default Book;