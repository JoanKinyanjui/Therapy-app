import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { BookAppointment } from '../components'
import { View } from 'react-native'
import BottomNav from '../components/BottomNavigation/BottomNav'

function Book() {
  return (
    <SafeAreaView>

    <Stack.Screen
    options={{headerShown:false}}
    headerTitle=''
    />

    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
          <BookAppointment />
          <BottomNav />
    </View>
    </ScrollView>
       
    </SafeAreaView>
  )
}

export default Book;