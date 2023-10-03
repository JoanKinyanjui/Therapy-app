import React from 'react';
import styles from "./messages.style";
import CustomHeader from "../CustomHeader/CustomHeader";
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { Image } from 'react-native';

function Messages() {
  const favourites = [
    {
      key: "1",
      name:"Joan Kinyanjui",
      message:"",
      link: "",
      image: "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "2",
      name:"Irene Muthoni",
      message:"",
      link: "",
      image: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      key: "3",
      name:"Emmanuel Macharia",
      message:"",
      link: "",
      image: "https://images.pexels.com/photos/235462/pexels-photo-235462.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]
  return (
    <View style={styles.container}>
    <CustomHeader title="Messages"  showBackButton />
        <View style={styles.favouritescontainer}>
        <FlatList
            data={favourites}
            numColumns={1}
            renderItem={({ item }) => (
              <View style={styles.rectangleDiv}>
               <View style={styles.itemOne}>
                <Image style={styles.ProfileImage} source={{uri:item.image}}/>
               </View>
               <View style={styles.itemTwo}>
                <View><Text style={styles.name}>{item.name}</Text></View>
                <View style={styles.message}>Hello there, How was your day ?</View>
               </View>
               <View style={styles.itemThree}>
                <View style={styles.time} > 14.41</View>
               </View>
              </View>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
   </View>
  )
}

export default Messages