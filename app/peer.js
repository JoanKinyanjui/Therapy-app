import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import Background from "../components/Background";
import BottomNav from "../components/BottomNavigation/BottomNav";
import PeerGroup from "../components/Peer/PeerGroups";

function peer() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{ headerShown: false }} />
    <CustomHeader title="Peer Groups" showAccountPic />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Background>
          <PeerGroup />
        </Background>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

export default peer;
