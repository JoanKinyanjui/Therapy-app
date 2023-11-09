import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Match } from '../components'
import BottomNav from '../components/BottomNavigation/BottomNav'
import Background from '../components/Background'
import CustomHeader from '../components/CustomHeader/CustomHeader'

function match() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{ headerShown: false }} />
    <CustomHeader title="Match" showBackButton/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Background>
          <Match />
        </Background>
      </ScrollView>
      <CustomHeader title="Match" showBackButton/>
      <BottomNav />
    </SafeAreaView>
  )
}

export default match