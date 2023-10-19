import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./login.style";
import AsyncStorage from '@react-native-async-storage/async-storage';



function SignUp() {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(false);
  const handleOptionSelect = () => {
    setSelectedOption(!selectedOption);
  };

  //Auth Logic
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleOnSubmit = async () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/clients/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem("token", data.token);
        await AsyncStorage.setItem("client", JSON.stringify(data.client));
        console.log("Login successful", data);
        router.push("/home");
      } else if (response.status === 400) {
        console.log("Client already exists");
      } else {
        console.log(data.message || "Error signing up");
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
        <Text style={styles.heading}>Register </Text>
        <Text style={styles.subHeading}> Create your account</Text>
      </View>

      <View style={styles.authInputDiv}>
        <TextInput
          style={styles.authLogin}
          placeholder="Enter username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
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
        <TextInput
          style={styles.authLogin}
          placeholder="Confirm password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
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
      </View>

      <View style={styles.dontHave}>
        <Text style={styles.dontHaveText}>Already have an account ?</Text>

        <TouchableOpacity
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text style={styles.alternativeAuthText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.alternativeAuth}>
        <View style={styles.orContinueWith}>
          <View style={styles.childOne}>
            <Image
              source={require("../../assets/images/line.png")}
              style={styles.line}
            />
          </View>
          <Text style={styles.childTwo}>Or Continue With</Text>
          <View style={styles.childThree}>
            <Image
              source={require("../../assets/images/line.png")}
              style={styles.line}
            />
          </View>
        </View>
        <View style={styles.googleIconDiv}>
          <Image
            source={require("../../assets/images/googleIcon.png")}
            style={styles.googleIcon}
          />
        </View>
      </View>
    </View>
  );
}

export default SignUp;
