import React from "react";
import { FlatList, ImageBackground, Text } from "react-native";
import { Image, View } from "react-native";
import styles from "./account.style";

function Account() {
  const data = [
    {
      key: "1",
      menu: "My Wallet",
      icon: require("../../assets/icons/wallet.png"),
      price: "KES 2500",
    },
    {
      key: "2",
      menu: "Subscription Plan",
      icon: require("../../assets/icons/subscription.png"),
      price: "Regular",
    },
    {
      key: "3",
      menu: "Terms of Use",
      icon: require("../../assets/icons/terms.png"),
      price: "",
    },
    {
      key: "4",
      menu: "Faqs",
      icon: require("../../assets/icons/faqs.png"),
      price: "",
    },
    {
      key: "5",
      menu: "Log Out",
      icon: require("../../assets/icons/logout.png"),
      price: "",
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={{ ...styles.backgroundImage, height: 300 }}
      ></ImageBackground>

      <View>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/6973960/pexels-photo-6973960.jpeg?auto=compress&cs=tinysrgb&w=400",
          }}
          style={styles.accountProfile}
        />
        <Image source={"../../assets/icons/edit.png"} style={styles.editIcon} />
      </View>
      <View style={styles.personalDetails}>
        <Text style={styles.name}>Joan Muchiri</Text>
        <Text style={styles.phoneNumber}>+254790236990</Text>
        <Text style={styles.phoneNumber}>***********</Text>
      </View>

      <View>
        <FlatList
          data={data}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={styles.accountMenu}>
              <View style={styles.imageDiv}>
                {" "}
                <Image source={item.icon} style={styles.imageIcon} />
              </View>
              <Text style={styles.menuPTag}>{item.menu}</Text>
              <Text style={styles.menuPrice}> {item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

export default Account;
