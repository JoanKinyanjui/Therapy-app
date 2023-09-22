import React from 'react'
import { ScrollView, View } from 'react-native'
import { Login } from '../components'
import { SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'

function login() {
  return (
    <SafeAreaView>

    <Stack.Screen
    options={{headerShown:false}}
    headerTitle=''
    />
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
          <Login />
    </View>
    </ScrollView>
       
    </SafeAreaView>
  )
}

export default login