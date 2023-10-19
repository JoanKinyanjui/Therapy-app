import { Stack } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Account } from "../components";
import BottomNav from "../components/BottomNavigation/BottomNav";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { useNavigation } from "@react-navigation/native";

function account() {

  const navigation = useNavigation();

  const logout = () => {
    console.log('you are almost loggedOut',token)
    setToken(null);
    console.log("you are now logged Out")
    navigation.reset({
      index: 0,
      routes: [{ name: 'signUp' }],
    });
  };

  return (
  
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Account />
      </ScrollView>
      <CustomHeader title="Account" showBackButton />
      <BottomNav />
    </SafeAreaView>

  );
}

export default account;
