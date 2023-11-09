import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Home, Questionnaire } from "../components";
import { Stack, useRouter } from "expo-router";
import BottomNav from "../components/BottomNavigation/BottomNav";
import Background from "../components/Background";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { useRoute } from "@react-navigation/native";

function questionnaire() {
  const route = useRoute();
  const { therapyId } = route.params;
  const [therapy, setTherapy] = useState();
  const [loading, setLoading] = useState(true);

  const fetchTherapy = async () => {
    try {
      const response = await fetch(
        `https://therapy-app-backend.vercel.app/api/clients/therapy/${therapyId}`
      );
      const therapyData = await response.json();
      setTherapy(therapyData);
      console.log(therapyData);
    } catch (error) {
      console.error("Failed to fetch therapy:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTherapy();
  }, [therapyId]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      {therapy ? (
        <CustomHeader title={therapy.title} showBackButton />
      ) : (
        <Text>Not</Text>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        style={{ flex: 1 }}
      >
        <Background>
          <Questionnaire data={therapy} />
        </Background>
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

export default questionnaire;
