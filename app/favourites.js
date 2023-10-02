import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import BottomNav from '../components/BottomNavigation/BottomNav'
import { Stack } from 'expo-router'
import { Favourites } from '../components'


function favourites() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{headerShown:false} }  headerTitle=''/>
      <ScrollView>
        <View>
          <Favourites />
          <BottomNav />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default favourites