import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./home.style";
import CustomHeader from "../CustomHeader/CustomHeader";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";

function Match() {
  const [likedTherapists, setLikedTherapists] = useState({});
  const toggleLike = (id) => {
    setLikedTherapists((prevLikedTherapists) => ({
      ...prevLikedTherapists,
      [id]: !prevLikedTherapists[id],
    }));
  };


  const data = [
    {
      id: "1",
      name: "Dr. Stanley Karanja",
      imageUrl:
        "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 2, 
      price: "KES 500",
      specializations: "anxiety, depression, ...",
    },
    {
      id: "2",
      name: "Dr. Irene Muthoni",
      imageUrl:
        "https://images.pexels.com/photos/12495575/pexels-photo-12495575.png?auto=compress&cs=tinysrgb&w=1600",
      rating: 4, 
      price: "KES 700",
      specializations: "anxiety, relationships, ...",
    },
    {
      id: "3",
      name: "Dr. Stanley Karanja",
      imageUrl:
        "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 3, 
      price: "KES 1000",
      specializations: "anxiety, marriage ...",
    },
    {
      id: "4",
      name: "Dr. Stanley Karanja",
      imageUrl:
        "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 1, 
      price: "KES 500",
      specializations: "anxiety, marriage ...",
    },
    {
      id: "5",
      name: "Dr. Stanley Karanja",
      imageUrl:
        "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 5, 
      price: "KES 1200",
      specializations: "anxiety, marriage ...",
    },
  ];

  const numColumns = 2;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onLongPress={() => toggleLike(item.id)}>
      <ImageBackground
        source={{ uri: item.imageUrl }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
          style={styles.gradient}
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
              <View style={styles.moneyText}>{item.price}</View>
            </View>
            <Text style={styles.specializations}>
              {item.specializations}
            </Text>
          </View>
          {likedTherapists[item.id] && ( // Check the like status based on therapist's ID
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
      <View>
        <View style={styles.textHeading}>
          Use filters to get a more accurate match
        </View>
      </View>

      {/* Therapists */}

      <View style={styles.gridContainer}>
      <FlatList
        data={data}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>

    </View>
  );
}

export default Match;
