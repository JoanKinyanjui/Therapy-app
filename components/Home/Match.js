import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./home.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

function Match() {
  const [therapists, setTherapists] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch('https://therapy-app-backend.vercel.app/api/therapists/all');
      const data = await response.json();
      console.log(data);
      setTherapists(data);
    } catch (error) {
      console.error("There was an error fetching therapists:", error);
    }
}

  useEffect(() => {
    fetchData();
  }, []);

  const addToFavorites = async (therapistId) => {
    console.log(therapistId)
    try {
      const token = await AsyncStorage.getItem("token");
        const response = await fetch(`https://therapy-app-backend.vercel.app/api/clients/favorites/add/${therapistId}`, 
        {
           method: 'POST' ,
           headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
          });
        const result = await response.json();
        console.log(result.message);
        refresh();
    } catch (error) {
        console.log("Error adding to favorites.");
    }
};


  const [likedTherapists, setLikedTherapists] = useState({});
  const toggleLike = (id) => {
    setLikedTherapists((prevLikedTherapists) => ({
      ...prevLikedTherapists,
      [id]: !prevLikedTherapists[id],
    }));
  };


  const numColumns = 2;
  const navigation = useNavigation();
  const handlePress = (item) => {
    navigation.navigate("book", { therapist: item });
  };

  // function truncateText(text, maxLength) {
  //   if (text.length <= maxLength) {
  //     return text;
  //   } else {
  //     const truncatedText = text.substring(0, maxLength);
  //     return `${truncatedText}...`;
  //   }
  // }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onLongPress={() =>{ toggleLike(item._id); addToFavorites(item._id)}}
      onPress={() => handlePress(item)}
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
          style={styles.gradientMatch}
        >
          <View style={styles.content}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.moneyDiv}>
              <View style={styles.rating}>
                {/* Display rating stars based on item.rating */}
                {Array.from({ length: item.rating }, (_, index) => (
                  <Image
                    key={index}
                    style={styles.stars}
                    source={require("../../assets/icons/star.png")}
                  />
                ))}
              </View>
              <View style={styles.moneyText}>
                <Text style={styles.moneyTextSpec}>{item.price}</Text>
              </View>
            </View>
            <Text style={styles.specializations}>
              {item.specializations.join(', ')}
            </Text>
          </View>
          {likedTherapists[item._id] && (
            <View style={styles.likeIconContainer}>
              <Ionicons name="heart" size={20} color="#7CB7FD" />
            </View>
          )}
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search */}
      <View style={styles.serachDiv}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/icons/search.png")}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="name of a therapist ..."
            style={styles.textInput}
          />
        </View>

        <View style={styles.filterBackground}>
          <Image
            source={require("../../assets/icons/filter.png")}
            style={styles.filterIcon}
          />
        </View>
      </View>

      {/* Text */}

      <Text style={styles.textHeading}>
        Use filters to get a more accurate match
      </Text>

      {/* Therapists */}

     {therapists && 
      <View style={styles.gridContainer}>
      <FlatList
        data={therapists}
        numColumns={numColumns}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
    </View>}
    </View>
  );
}

export default Match;
