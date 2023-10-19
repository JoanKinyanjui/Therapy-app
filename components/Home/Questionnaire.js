import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import CustomHeader from "../CustomHeader/CustomHeader";
import styles from "./questionnaire.style";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

function Questionnaire({data}) {
  console.log(data)
  //Navigate ...
  const navigation = useNavigation();
  const handleNavigateToMatch = () => {
    navigation.navigate("match");
  };

  const router = useRouter();
 
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: optionIndex,
    }));
  };
  const renderItem = ({ item: questionItem, index: questionIndex }) => (
    <View key={questionItem._id.$oid} style={styles.questionIndex}>
      <Text style={styles.questionStyle}>{questionItem.questionText}</Text>

      <View style={styles.optionArrayContainer}>
        {questionItem.options.map((choice, choiceIndex) => (
          <TouchableOpacity
            key={choice._id.$oid}
            onPress={() => handleOptionSelect(questionIndex, choiceIndex)}
            style={[
              {
                backgroundColor:
                  selectedOptions[questionIndex] === choiceIndex
                    ? "black"
                    : "#E4F5FE",
              
                color:
                  selectedOptions[questionIndex] === choiceIndex
                    ? "white" 
                    : "black",
              },

              styles.optionContainer,
            ]}
          >
            <Text
              style={[
                styles.option,
                {
                  color:
                    selectedOptions[questionIndex] === choiceIndex
                      ? "white" 
                      : "#B4B2B2", 
                },
              ]}
            >
              {choice.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.paraOne}>Help us match you with the </Text>
        <Text style={styles.paraTwo}> Right Therapist</Text>
        <Text style={styles.paraThree}>
          Select choices that describe you and your feelings.
        </Text>
      </View>

   {data &&    <View style={{ marginTop: 20 }}>
        <FlatList
          data={data.questions}
          keyExtractor={(item) => item._id.$oid}
          renderItem={renderItem}
        />
      </View>
      }

      <View style={{ alignSelf: "center"}}>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToMatch}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Proceed</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Questionnaire;
