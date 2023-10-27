import { Stack } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Account } from "../components";
import BottomNav from "../components/BottomNavigation/BottomNav";
import CustomHeader from "../components/CustomHeader/CustomHeader";

function account() {

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
