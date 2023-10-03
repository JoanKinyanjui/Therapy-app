import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity,Image } from "react-native";
import CustomHeader from "../CustomHeader/CustomHeader";
import styles from "./questionnaire.style";

function Questionnaire() {
  const questionsWithChoices = [
    {
      id: 1,
      question: "What is your gender ?",
      options: [{ option: "Female" }, { option: "Male" },{ option: "Binary" }],
    },
    {
      id: 2,
      question: "Tell us more about you ",
      options: [{ option: "age(0-18)" }, { option:"age(19-35)" },{ option: "age(36 and above)" }],
    },
    {
      id: 3,
      question: "How would you rate your current physical health?",
      options: [{ option: "Good" }, { option: "Fair" },{ option: "Poor"}],
    },
    {
      id: 4,
      question: "Have you been to therapy before ?",
      options: [{ option: "yes" }, { option: "no" }],
    },
    {
      id: 5,
      question: "What led you to consider Therapy Today ?",
      options: [{ option: "now or never" }, { option: "then" }],
    }
  ];
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: optionIndex,
    }));
  };
  const renderItem = ({ item: questionItem, index: questionIndex }) => (
    <View key={questionIndex} style={styles.questionIndex}>
      <Text style={styles.questionStyle}>{questionItem.question}</Text>
     
        <View style={styles.optionArrayContainer}>
          {questionItem.options.map((choice, choiceIndex) => (
            <TouchableOpacity
              key={choiceIndex}
              onPress={() => handleOptionSelect(questionIndex, choiceIndex)}
              style={[
                {
                  backgroundColor:
                    selectedOptions[questionIndex] === choiceIndex
                      ? "black"
                      : "gainsboro",
                  color: // Text color property
                    selectedOptions[questionIndex] === choiceIndex
                      ? "white" // Change text color to white when selected
                      : "black", // Change text color to black when not selected
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
                ? "white" // Text color when selected
                : "#B4B2B2", // Text color when not selected
          },
        ]}
      >
        {choice.option}
      </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
   
  );
  
  return (
    <View style={styles.container}>
      {/* <Background > */}
      <CustomHeader title="Individiual Therapy" showAccountPic />

      <View style={styles.topContainer}>
        <Text style={styles.paraOne}>Help us match you with the </Text>
        <Text style={styles.paraTwo}> Right Therapist</Text>
        <Text style={styles.paraThree}>
          Select choices that describe you and your feelings.
        </Text>
      </View>

      <View style={{marginTop:20}}>
        <FlatList
          data={questionsWithChoices}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.ButtonDiv}>
        <Image  source={require('../../assets/buttons/proceed.png')}/>
      </View>
    </View>
  );
}

export default Questionnaire;
