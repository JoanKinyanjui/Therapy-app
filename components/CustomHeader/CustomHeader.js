import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./custom.style";
import { Link } from "expo-router";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomHeader = ({ title, showBackButton, showAccountPic }) => {
  const goBack = () => {
    console.log("moving back");
    router.back();
  };

  const [client, setClient] = useState();

  async function getClient() {
    let clientDetails = JSON.parse(await AsyncStorage.getItem("client"));
    setClient(clientDetails);
    console.log(clientDetails);
  }

  useEffect(() => {
    getClient();
  }, []);

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/icons/back.png")} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {showAccountPic && (
        <Link href="/account">
          <TouchableOpacity>
            <Image
              source={{
                uri: client
                  ? client.image
                  : "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_1280.png",
              }}
              style={styles.accountStyle}
            />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};

export default CustomHeader;
