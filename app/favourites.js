import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import BottomNav from '../components/BottomNavigation/BottomNav'
import { Stack } from 'expo-router'
import { Favourites } from '../components'
import Background from '../components/Background'


function favourites() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{headerShown:false} }  headerTitle=''/>
      <ScrollView>
      <Background>
          <Favourites />
          <BottomNav />
      </Background>
      </ScrollView>
    </SafeAreaView>
  )
}

export default favourites