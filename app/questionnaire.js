import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Home, Questionnaire } from '../components'
import { Stack } from 'expo-router'
import BottomNav from '../components/BottomNavigation/BottomNav'
import Background from '../components/Background'

function questinnaire() {
  return (
    <SafeAreaView>

    <Stack.Screen
    options={{headerShown:false}}
    headerTitle=''
    />

    <ScrollView showsVerticalScrollIndicator={false}>
  <Background>
          <Questionnaire />
          <BottomNav />
    </Background>
    </ScrollView>
       
    </SafeAreaView>
  )
}

export default questinnaire;