// CustomHeader.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./custom.style";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title, showBackButton, showAccountPic }) => {
  const navigation = useNavigation();

  const goBack = () => {
    console.log('moving back')
    navigation.goBack(); 
  };

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={goBack} >
          <Image source={require("../../assets/icons/back.png")} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {showAccountPic && (
       <Link href='/account'>
        <TouchableOpacity>
        <Image source={{uri:"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"}} 
          style={styles.accountStyle}/>
        </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};

export default CustomHeader;
