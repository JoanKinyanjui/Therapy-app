import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./login.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(false);
  const handleOptionSelect = () => {
    setSelectedOption(!selectedOption);
  };

  //Auth Logic
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async () => {
    try {
      const response = await fetch("https://therapy-app-backend.vercel.app/api/clients/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem("token", data.token);
        await AsyncStorage.setItem("client", JSON.stringify(data.client));
        console.log("Login successful", data);
        router.push("/home");
      } else {
        console.log(data.error || "Error signing up");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      console.log("Error signing up. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/images/background.png")}
          style={styles.image}
        />
        <Text style={styles.heading}>Welcome Back </Text>
        <Text style={styles.subHeading}>Log into your account </Text>
      </View>

      <View style={styles.authInputDiv}>
        <TextInput
          style={styles.authLogin}
          placeholder="Enter email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.authLogin}
          placeholder="Enter password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.passwordDiv}>
        <View style={styles.checkboxDiv}>
          <TouchableOpacity onPress={handleOptionSelect}>
            <Image
              source={
                selectedOption
                  ? require("../../assets/images/checkBoxTicked.png")
                  : require("../../assets/images/checkboxRectangle.png")
              }
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.passwordContentPtag}>Remember me</Text>
        </View>
        <View style={styles.forgotPasswordDiv}>
          <Text style={styles.passwordContentPtag}>Forgot password ?</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Log In</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.dontHave}>
        <Text style={styles.dontHaveText}>Dont have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/signUp");
          }}
        >
          <Text style={styles.alternativeAuthText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
