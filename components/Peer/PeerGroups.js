import React, { useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import styles from "./peer.style";
import { TouchableOpacity } from "react-native";

function PeerGroup() {
  const groups = [
    {
      key: "1",
      title: "Let's Talk Intimacy",
      percentage: "60%",
      desc: "...",
      full: false,
      image:
        "https://images.pexels.com/photos/1001445/pexels-photo-1001445.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      key: "2",
      title: "Peaceful Life",
      percentage: "100%",
      desc: "...",
      full: true,
      image:
        "https://images.pexels.com/photos/3868873/pexels-photo-3868873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      key: "3",
      title: "Postpartum Depression",
      percentage: "60%",
      desc: "...",
      full: false,
      image:
        "https://images.pexels.com/photos/3094422/pexels-photo-3094422.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <View style={styles.container}>
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

      <View>
        <Text style={styles.topic}>Explore</Text>
      </View>

      <FlatList
        data={groups}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={styles.groupOverallContainer}>
            <View style={styles.groupContainerOne}>
              <Text style={styles.groupContainerOneText}>{item.title}</Text>
              <Text style={styles.percentageMembers}>{item.percentage}</Text>
            </View>

            <View style={styles.groupContainerTwo}>
              <Text style={styles.groupContainerTwoText}>
              Join 'Let's Talk Intimacy,' where we discuss relationships, connection, and intimacy in a safe and open space.
              </Text>
            </View>

            <View style={styles.groupContainerThree}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.groupProfile}
              />
            </View>

            <View style={styles.groupContainerFour}>
              <View style={styles.groupContainerFourSpec}>
                <Image
                  source={require("../../assets/icons/blacklove.png")}
                  style={styles.containerFourIcon}
                />
                <Text style={styles.numbers}>70</Text>
              </View>
              <View style={styles.groupContainerFourSpec}>
                <Image
                  source={require("../../assets/icons/gcomments.png")}
                  style={styles.containerFourIcon}
                />
                <Text style={styles.numbers}>400</Text>
              </View>
              <View style={styles.groupContainerFourSpec}>
                <Image
                  source={require("../../assets/icons/gshare.png")}
                  style={styles.containerFourIcon}
                />
                <Text style={styles.numbers}>20</Text>
              </View>
              <View style={styles.groupContainerFourSpec}>
               {(item.percentage  === "100%") ?
                <Image
                source={require("../../assets/icons/gnotify.png")}
                style={styles.containerFourIcon}
              />:
              <Image
              source={require("../../assets/icons/gadd.png")}
              style={styles.containerFourIcon}
            />}
                <Text style={styles.numbers}>10</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

export default PeerGroup;
