import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SignUp } from "../components";
import { Stack } from "expo-router";

function signUp() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} headerTitle="" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SignUp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default signUp;
