import { Stack } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import BottomNav from "../components/BottomNavigation/BottomNav";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import VideoCall from "../components/Appointments/VideoCall";

function VideoAppointment() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <VideoCall />
      </ScrollView>
      <CustomHeader title="Video Call" showBackButton />
      <BottomNav />
    </SafeAreaView>
  );
}

export default VideoAppointment;
