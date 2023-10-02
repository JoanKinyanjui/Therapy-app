import React from 'react'
import { ScrollView, View } from 'react-native'
import BottomNav from '../components/BottomNavigation/BottomNav'
import { SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import { Schedule } from '../components'

function schedule() {
  return (
    <SafeAreaView>

    <Stack.Screen
    options={{headerShown:false}}
    headerTitle=''
    />

    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
          <Schedule />
          <BottomNav />
    </View>
    </ScrollView>
       
    </SafeAreaView>
  )
}

export default schedule;