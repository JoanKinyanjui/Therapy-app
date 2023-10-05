import React from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import styles from "./home.style";
import { LinearGradient } from "expo-linear-gradient";

function Home() {
  const data = [
    {
      key: "1",
      title: "Individual",
      tagline: "For myself",
      link: "",
      image: "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "2",
      title: "Couples",
      tagline: "For me and my partner",
      link: "",
      image: "https://images.pexels.com/photos/6579051/pexels-photo-6579051.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      key: "3",
      title: "Student",
      tagline: "For a person enrolled in an institution",
      link: "",
      image: "https://images.pexels.com/photos/5896510/pexels-photo-5896510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "4",
      title: "Employee",
      tagline: "For a person working in an organization",
      link: "",
      image: "https://images.pexels.com/photos/7658250/pexels-photo-7658250.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <View style={styles.container}>

        <View style={styles.topContainer}>
          <Text style={styles.paraOne}>
            Discover happiness and peace of mind through{" "}
          </Text>
          <Text style={styles.paraTwo}>Online Therapy.</Text>
          <Text style={styles.paraThree}>
            What type of therapy are you looking for ?
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <FlatList
            data={data}
            numColumns={1}
            renderItem={({ item }) => (
              <View style={styles.rectangleDiv}>
                <ImageBackground
                  source={{uri:item.image}}
                  style={styles.backgroundImage}
                >
                   <LinearGradient 
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']} 
          style={styles.gradient}
        >
                  <View style={styles.gridItem}>
                    <View style={styles.wording}>
                      <Text style={styles.word1}>{item.title}</Text>
                      <Image
                        source={require('../../assets/icons/arrow.png')}
                        style={styles.arrow}
                      />
                    </View>

                    <View>
                      <Text style={styles.word2}>{item.tagline}</Text>
                    </View>
                  </View>
                  </LinearGradient>
                </ImageBackground>
              </View>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      {/* </Background> */}
      
    </View>
  );
}

export default Home;
