import React from "react";
import styles from "./favourites.style";
import { FlatList, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Favourites() {
  const rating = 3;

  const favourites = [
    {
      key: "1",
      name: "Joan Kinyanjui",
      link: "",
      image:
        "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "2",
      name: "Dian Ngoa",
      link: "",
      image:
        "https://images.pexels.com/photos/6579051/pexels-photo-6579051.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      key: "3",
      name: "Winfred Wanjiru",
      link: "",
      image:
        "https://images.pexels.com/photos/5896510/pexels-photo-5896510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "4",
      name: "Melany Kandie",
      link: "",
      image:
        "https://images.pexels.com/photos/7658250/pexels-photo-7658250.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.favouritescontainer}>
        <FlatList
          data={favourites}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={styles.rectangleDiv}>
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
      {Array.from({ length: rating }, (_, index) => (
                  <Image
                    key={index}
                    style={styles.starsInAppointment}
                    source={require("../../assets/icons/star.png")}
                  />
                ))}
      </View>
              </View>

              <TouchableOpacity style={styles.itemThree}>
                <View style={styles.RemoveIcon}></View>
              </TouchableOpacity>
            </View>
            
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

export default Favourites;
