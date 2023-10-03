import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Match } from '../components'
import BottomNav from '../components/BottomNavigation/BottomNav'
import Background from '../components/Background'

function match() {
  return (
    <SafeAreaView>

    <Stack.Screen
    options={{headerShown:false}}
    headerTitle=''
    />
    <ScrollView showsVerticalScrollIndicator={false}>
    <Background>
          <Match />
          <BottomNav />
   </Background>
    </ScrollView>
       
    </SafeAreaView>
  )
}

export default match