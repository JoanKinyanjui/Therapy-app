import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Home, Messages } from '../components'
import { Stack } from 'expo-router'
import BottomNav from '../components/BottomNavigation/BottomNav'

function home() {
  return (
    <SafeAreaView>

    <Stack.Screen
    options={{headerShown:false}}
    headerTitle=''
    />

    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
          <Messages />
          <BottomNav />
    </View>
    </ScrollView>
       
    </SafeAreaView>
  )
}

export default home
