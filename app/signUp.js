import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SignUp } from "../components";
import { Stack } from "expo-router";
import Background from "../components/Background";

function signUp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Background>
          <SignUp />
        </Background>
      </ScrollView>
    </SafeAreaView>
  );
}

export default signUp;
