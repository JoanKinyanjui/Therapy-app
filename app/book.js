import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { BookAppointment } from "../components";
import { View } from "react-native";
import BottomNav from "../components/BottomNavigation/BottomNav";
import Background from "../components/Background";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { useRoute } from "@react-navigation/native";

function Book() {
  const route = useRoute();
  const { therapist } = route.params;
  console.log(therapist);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <CustomHeader title="Book Appointment" showBackButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Background>
          <BookAppointment therapistId={therapist._id} />
        </Background>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

export default Book;
