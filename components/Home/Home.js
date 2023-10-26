import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import styles from "./home.style";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

function Home() {
  const [therapies, setTherapies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTherapies() {
    try {
      const response = await fetch(
        "https://therapy-app-backend.vercel.app/api/clients/therapyCategories"
      );
      const data = await response.json();
      setTherapies(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Failed fetching therapies:", error);
      setLoading(false);
    }
  } 

  useEffect(() => {
 fetchTherapies();
  }, []);

  if (loading) return( <Text>Loading...</Text>)

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.paraOne}>
          Discover happiness and peace of mind through
          {/* {" "} */}
        </Text>
        <Text style={styles.paraTwo}>Online Therapy.</Text>
        <Text style={styles.paraThree}>
          What type of therapy are you looking for ?
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <FlatList
          data={therapies}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={styles.rectangleDiv}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.backgroundImage}
              >
                <LinearGradient
                  colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                  style={styles.gradient}
                >
                  <Link
                    href={{
                      pathname: "/questionnaire",
                      params: { therapyId: item._id },
                    }}
                  >
                    <View style={styles.gridItem}>
                      <View style={styles.wording}>
                        <Text style={styles.word1}>{item.title}</Text>
                        <Image
                          source={require("../../assets/icons/arrow.png")}
                          style={styles.arrow}
                        />
                      </View>

                      <View>
                        <Text style={styles.word2}>{item.description}</Text>
                      </View>
                    </View>
                  </Link>
                </LinearGradient>
              </ImageBackground>
            </View>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
}

export default Home;
