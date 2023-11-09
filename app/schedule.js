import React from 'react'
import { ScrollView, View } from 'react-native'
import BottomNav from '../components/BottomNavigation/BottomNav'
import { SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import { Schedule } from '../components'
import Background from '../components/Background'
import CustomHeader from '../components/CustomHeader/CustomHeader'

function schedule() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{ headerShown: false }} />
    <CustomHeader title="Schedule" showBackButton/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Background>
          <Schedule />
        </Background>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  )
}

export default schedule;