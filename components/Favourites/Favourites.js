import React, { useEffect, useState } from "react";
import styles from "./favourites.style";
import { FlatList, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";

function Favourites() {
 
  const [favorites, setFavorites] = useState([]);
    
  const fetchFavorites = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
          const response = await fetch(`https://therapy-app-backend.vercel.app/api/clients/favorites`,
          { method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
       });
          const data = await response.json();
          console.log(data);
          setFavorites(data);
      } catch (error) {
          console.error("Error fetching favorite therapists:", error);
      }
  };

  useEffect(() => {
      fetchFavorites();
  }, []);

  const removeFromFavorites = async (therapistId) => {
    try {
      const token = await AsyncStorage.getItem("token");
        const response = await fetch(`https://therapy-app-backend.vercel.app/api/clients/favorites/remove/${therapistId}`, 
        { method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      },
     });
        const result = await response.json();
        fetchFavorites();
    } catch (error) {
        console.log("Error removing from favorites.");
    }
};
const navigation = useNavigation();
const handlePress = (item) => {
  navigation.navigate("book", { therapist: item });
};

if(favorites.length === 0){
  return( <Text>You do not have any favorites yet!!</Text>)

}
  return (
    <View style={styles.container}>
      <View style={styles.favouritescontainer}>
        <FlatList
          data={favorites}
          numColumns={1}
          renderItem={({ item }) => (
            <TouchableOpacity  onPress={() => handlePress(item)}  style={styles.rectangleDiv}>
              <View style={styles.itemOne}>
                <Image
                  style={styles.ProfileImage}
                  source={{
                    uri:
                     item.image
                  }}
                />
              </View>
              <View style={styles.itemTwo}>
                <View>
                  <Text style={styles.nameFavourites}>{item.name}</Text>
                </View>
                <View style={styles.starsDiv}>
      {Array.from({ length: item.rating }, (_, index) => (
                  <Image
                    key={index}
                    style={styles.starsInAppointment}
                    source={require("../../assets/icons/star.png")}
                  />
                ))}
      </View>
              </View>

              <TouchableOpacity style={styles.itemThree} onPress={()=>removeFromFavorites(item._id)}>
                <View style={styles.RemoveIcon}></View>
              </TouchableOpacity>
            </TouchableOpacity>
            
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
}

export default Favourites;
