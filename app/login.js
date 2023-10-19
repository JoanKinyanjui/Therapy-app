import React from 'react'
import { ScrollView, View } from 'react-native'
import { Login } from '../components'
import { SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import Background from '../components/Background'

function login() {


  return (
 
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{ headerShown: false }} />

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 70 }}
      style={{ flex: 1 }}
    >
      <Background>
        <Login />
      </Background>
    </ScrollView>
  </SafeAreaView>

  )
}

export default login