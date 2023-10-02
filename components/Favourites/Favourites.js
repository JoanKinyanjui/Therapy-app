import React from 'react';
import styles from './favourites.style';
import { FlatList, Image, Text, View } from 'react-native';
import CustomHeader from '../CustomHeader/CustomHeader';

function Favourites() {
  const favourites = [
    {
      key: "1",
      name:"Joan KInyanjui",
      link: "",
      image: "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "2",
      name:"Joan Kinyanjui",
      link: "",
      image: "https://images.pexels.com/photos/6579051/pexels-photo-6579051.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      key: "3",
      name:"Joan KInyanjui",
      link: "",
      image: "https://images.pexels.com/photos/5896510/pexels-photo-5896510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "4",
      name:"Joan Kinyanjui",
      link: "",
      image: "https://images.pexels.com/photos/7658250/pexels-photo-7658250.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <View style={styles.container}>
      
         {/* <Background > */}
        <CustomHeader title="Favourites"  showBackButton />
        <View style={styles.favouritescontainer}>
        <FlatList
            data={favourites}
            numColumns={1}
            renderItem={({ item }) => (
              <View style={styles.rectangleDiv}>
               <View style={styles.itemOne}>
                <Image style={styles.ProfileImage} source={{uri:"https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1600"}}/>
               </View>
               <View style={styles.itemTwo}>
                <View><Text>{item.name}</Text></View>
                <View>stars</View>
               </View>
               <View style={styles.itemThree}>
                <View style={styles.RemoveIcon}></View>
               </View>
              </View>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>

    </View>
  )
}

export default Favourites