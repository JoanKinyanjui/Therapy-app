import React, { useState } from "react";
import {SafeAreaView, ScrollView, View } from "react-native";
import { Home } from "../components";
import { Stack } from "expo-router";
import BottomNav from "../components/BottomNavigation/BottomNav";
import Background from "../components/Background";
import CustomHeader from "../components/CustomHeader/CustomHeader";

function HomePage() {
  return (
  
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{ headerShown: false }} />
    <CustomHeader title="Home" showAccountPic />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Background>
          <Home  />
        </Background>
      </ScrollView>
      <CustomHeader title="Home" showAccountPic />
      <BottomNav />
 </SafeAreaView>
 
  );
}

export default HomePage;
