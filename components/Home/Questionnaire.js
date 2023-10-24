import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import CustomHeader from "../CustomHeader/CustomHeader";
import styles from "./questionnaire.style";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


function Questionnaire({data}) {
  console.log(data)
  //Navigate ...
  const navigation = useNavigation();

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => {
      // If it's the last question, allow multiple selections
      if (questionIndex === data.questions.length - 1) {
        const currentSelections = prevSelectedOptions[questionIndex] || [];
        if (currentSelections.includes(optionIndex)) {
          // Unselect the option if it's already selected
          return {
            ...prevSelectedOptions,
            [questionIndex]: currentSelections.filter((i) => i !== optionIndex),
          };
        } else {
          // Otherwise, add this option to the selections
          return {
            ...prevSelectedOptions,
            [questionIndex]: [...currentSelections, optionIndex],
          };
        }
      } else {
        // For other questions, only allow one selection
        return {
          ...prevSelectedOptions,
          [questionIndex]: [optionIndex],
        };
      }
    });
  };
  

  const handleNavigateToMatch = async () => {
    try {
      const responsesArray = Object.entries(selectedOptions).map(([questionIndex, answerIndex]) => {
        return { question: questionIndex, answer: answerIndex };
      });
  
      await AsyncStorage.setItem('userResponses', JSON.stringify(responsesArray));
  
      navigation.navigate("match");
    } catch (error) {
      console.error('Error saving responses to AsyncStorage:', error);
    }
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
                selectedOptions[questionIndex] && selectedOptions[questionIndex].includes(choiceIndex)
                  ? "black"
                  : "#E4F5FE",
              color:
                selectedOptions[questionIndex] && selectedOptions[questionIndex].includes(choiceIndex)
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
