import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Home, Messages } from "../components";
import { Stack } from "expo-router";
import BottomNav from "../components/BottomNavigation/BottomNav";
import Background from "../components/Background";
import CustomHeader from "../components/CustomHeader/CustomHeader";

function home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Background>
          <Messages  />
        </Background>
      </ScrollView>
      <CustomHeader title="Messages" showBackButton />
      <BottomNav />
    </SafeAreaView>
  );
}

export default home;
