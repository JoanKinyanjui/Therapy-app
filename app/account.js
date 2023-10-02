import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Account } from '../components'
import BottomNav from '../components/BottomNavigation/BottomNav'

function account() {
  return (
    <SafeAreaView>

    <Stack.Screen
    options={{headerShown:false}}
    headerTitle=''
    />

    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
          <Account />
          <BottomNav />
    </View>
    </ScrollView>
       
    </SafeAreaView>
  )
}

export default account