// CustomHeader.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./custom.style";
import { Link } from "expo-router";

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
       <Link href='/account'>
        <TouchableOpacity>
        <Image source={{uri:"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"}} style={styles.accountStyle}/>
        </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};

export default CustomHeader;
