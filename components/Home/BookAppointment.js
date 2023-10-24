import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./home.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";
import { Image } from "react-native";
import { FlatList } from "react-native";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

function BookAppointment({ therapistId }) {
  const modesOfTherapy = [
    {
      mode: "call",
      image: require("../../assets/icons/call.png"),
    },
    {
      mode: "video",
      image: require("../../assets/icons/video.png"),
    },
    {
      mode: "messages",
      image: require("../../assets/icons/messagesblack.png"),
    },
  ];
  console.log(therapist);
  //Navigate ...
  const navigation = useNavigation();
  const bookAppointment = async () => {
    const selectedDate = therapist.availability[selectedDateIndex];
    const day = selectedDate.day;
    const time = availableTimes[selectedTimeIndex];
    const mode = modesOfTherapy[selectedMode].mode;
    const storedResponses = await AsyncStorage.getItem("userResponses");

    const requestBody = {
        therapistId: therapist._id, 
        day,
        time,
        mode,
        questionsAndAnswers: storedResponses, 
    };

    try {
        const response = await fetch('http://localhost:5000/api/clients/book-appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        const responseData = await response.json();

        if (response.ok) {
            console.log('Appointment booked:', responseData);
            navigation.navigate('schedule');
        } else {
            console.error('Failed to book appointment:', responseData);
        }
    } catch (error) {
        console.error('Error booking appointment:', error);
    }
};

  //Fetch responses
  const fetchStoredResponses = async () => {
    try {
      const storedResponses = await AsyncStorage.getItem("userResponses");
      if (storedResponses !== null) {
        console.log(storedResponses);
        return JSON.parse(storedResponses);
      }
    } catch (error) {
      console.error("Error fetching responses from AsyncStorage:", error);
    }
    return null;
  };
  //fetch Responses
  const [therapist, setTherapist] = useState();
  async function fetchTherapist() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/therapists/${therapistId}`
      );
      const data = await response.json();
      console.log(data);
      setTherapist(data);
    } catch (error) {
      console.error("There was an error fetching therapists:", error);
    }
  }

  useEffect(() => {
    fetchStoredResponses();
    fetchTherapist();
  }, []);

   


  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const handleDatePress = (index) => {
    setSelectedDateIndex(index);
    const selectedDayTimes = therapist.availability[index].times;
    setAvailableTimes(selectedDayTimes);
  };

  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const handleTimePress = (index) => {
    setSelectedTimeIndex(index); // Update the selected time index
  };
  const [selectedMode, setSelectedMode] = useState(null);
  const handleModeChange = (index) => {
    setSelectedMode(index); // Update the selected time index
  };

  const renderDateItem = ({ item, index }) => {
    const isSelected = index === selectedDateIndex;
    return (
      <TouchableOpacity
        style={[
          styles.dateContainer,
          isSelected ? styles.selectedDate : styles.unselectedDate,
        ]}
        onPress={() => handleDatePress(index)}
      >
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>{item.day.substring(0, 3)}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [availableTimes, setAvailableTimes] = useState([]);

  const renderTimeItem = ({ item, index }) => {
    const isSelected = index === selectedTimeIndex;
    return (
      <TouchableOpacity
        style={[
          styles.dateContainer,
          isSelected ? styles.selectedTime : styles.unselectedTime,
        ]}
        onPress={() => handleTimePress(index)}
      >
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMode = ({ item, index }) => {
    const isSelected = index === selectedMode;
    return (
      <TouchableOpacity
        style={[
          styles.dateContainer,
          isSelected ? styles.selectedModes : styles.unselectedModes,
        ]}
        onPress={() => handleModeChange(index)}
      >
        <View style={styles.dateTextContainer}>
          <View style={styles.dateText}>
            <Image source={item.image} style={styles.modeOfTherapy} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (!therapist) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <View style={styles.containerBook}>
      <View style={styles.topTHerapistProfile}>
        <Image
          style={styles.therapistProfile}
          source={{
            uri: therapist.image,
          }}
        />
        <View>
          <Text style={styles.therapistName}>{therapist.name}</Text>
          <View style={styles.moneyTextBook}>
            <Text style={styles.moneyTextSpecBook}>{therapist.price}</Text>
          </View>
        </View>
        <View style={styles.starsDiv}>
          {Array.from({ length: therapist.rating }, (_, index) => (
            <Image
              key={index}
              style={styles.starsInAppointment}
              source={require("../../assets/icons/star.png")}
            />
          ))}
        </View>
        <Text style={styles.profileparagraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of.
        </Text>
        <Text style={styles.specializationDiv}>
          {therapist.specializations.join(",")}
        </Text>
      </View>

      <View>
        <Text style={styles.appointmentDateHeading}>Appointment Date</Text>
      </View>

      {/* Calendar ... */}
      <View style={styles.bookAppointmentContainer}>
        <Text style={styles.category}>April</Text>

        <View style={styles.containerOne}>
          <FlatList
            horizontal
            data={therapist.availability}
            renderItem={renderDateItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.dateList}
          />
        </View>
      </View>
      {/* Time */}
      {availableTimes.length > 0 ? (
        <View style={styles.bookAppointmentContainer}>
          <Text style={styles.category}>Time</Text>

          <View style={styles.containerOne}>
            <FlatList
              horizontal
              data={availableTimes}
              renderItem={renderTimeItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.dateList}
            />
          </View>
        </View>
      ) : (
        <Text></Text>
      )}

      {/* Mode of Therapy */}
      <View style={styles.bookAppointmentContainer}>
        <Text style={styles.category}>Mode of Therapy</Text>

        <View>
          <FlatList
            horizontal
            data={modesOfTherapy}
            renderItem={renderMode}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.containermodeOfTherapy}
          />
        </View>
      </View>

      <View style={{ alignSelf: "center", flex: 1, width: "100%" }}>
        <TouchableOpacity style={styles.button} onPress={bookAppointment}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Book Appointment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BookAppointment;
