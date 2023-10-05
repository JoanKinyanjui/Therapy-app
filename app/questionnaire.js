import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Home, Questionnaire } from '../components'
import { Stack } from 'expo-router'
import BottomNav from '../components/BottomNavigation/BottomNav'
import Background from '../components/Background'
import CustomHeader from '../components/CustomHeader/CustomHeader'

function questinnaire() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{ headerShown: false }} />

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 70 }}
      style={{ flex: 1 }}
    >
      <Background>
        <Questionnaire />
      </Background>
    </ScrollView>
    <CustomHeader title="Individual Therapy" showBackButton/>
    <BottomNav />
  </SafeAreaView>
  )
}

export default questinnaire;