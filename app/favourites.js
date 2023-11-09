import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import BottomNav from '../components/BottomNavigation/BottomNav'
import { Stack } from 'expo-router'
import { Favourites } from '../components'
import Background from '../components/Background'
import CustomHeader from '../components/CustomHeader/CustomHeader'


function favourites() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{ headerShown: false }} />
    <CustomHeader title="Favourites" showBackButton/>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 70 }}
      style={{ flex: 1 }}
    >
      <Background>
        <Favourites />
      </Background>
    </ScrollView>
   
    <BottomNav />
  </SafeAreaView>
  )
}

export default favourites