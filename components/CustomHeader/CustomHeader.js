// CustomHeader.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./custom.style";

const CustomHeader = ({ title, showBackButton, showAccountPic }) => {
  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity >
          <Image source={require("../../assets/icons/back.png")} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {showAccountPic && (
        <TouchableOpacity>
          <Image source={require("../../assets/icons/account.png")} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
