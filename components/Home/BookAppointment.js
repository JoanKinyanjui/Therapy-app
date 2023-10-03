import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import styles from "./home.style";
import CustomHeader from '../CustomHeader/CustomHeader';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { FlatList } from 'react-native';

function BookAppointment() {
  const rating = 3;
  const hoursIn24HrClock = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];
  const datesData = [
{
      day:"Mon",
      date:23,
      time:"13:00"
},
{
  day:"Tue",
  date:24,
  time:"14:00"
},
{
  day:"Wed",
  date:25,
  time:"15:00"
},
{
  day:"Thur",
  date:26,
  time:"16:00"
},
{
day:"Fri",
date:27,
time:"17:00"
},
{
day:"Mon",
date:28,
time:"18:00"
},
{
  day:"Tue",
  date:29,
  time:"19:00"
},
{
day:"Wed",
date:30,
time:"20:00"
},
{
day:"Thur",
date:31,
time:"21:00"
},
  ]
  const modesOfTherapy = [
   {
    mode:"call",
    image: require("../../assets/icons/call.png")
   },
   {
    mode:"video",
    image: require("../../assets/icons/video.png")
   },
   {
    mode:"messages",
    image: require("../../assets/icons/messages.png")
   },
  ];

  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const handleDatePress = (index) => {
    setSelectedDateIndex(index); // Update the selected date index
  };
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const handleTimePress = (index) => {
    setSelectedTimeIndex(index); // Update the selected time index
  };
  const [selectedMode, setSelectedMode] = useState(null);
  const handleModeChange = (index) => {
    setSelectedMode(index); // Update the selected time index
  };

  const renderDateItem = ({ item,index }) => {
    const isSelected = index === selectedDateIndex;
    return (
      <TouchableOpacity style={styles.dateContainer}  onPress={() => handleDatePress(index)}>
      <Image
          source={isSelected ? require('../../assets/images/bluebox.png') : require('../../assets/images/graybox.png')}
          style={styles.dates}
        />
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>{item.day}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTimeItem = ({ item,index }) => {
    const isSelected = index === selectedTimeIndex;
    return (
      <TouchableOpacity style={styles.dateContainer} onPress={() => handleTimePress(index)}>
      <Image
        source={isSelected ? require('../../assets/images/bluetime.png') : require('../../assets/images/timegray.png')}
        style={styles.dates}
      />
      <View style={styles.dateTextContainer}>
        <Text style={styles.dateText}>{item}</Text>
      </View>
    </TouchableOpacity>
    );
  }; 

  const renderMode = ({ item,index }) => {
    const isSelected = index === selectedMode;
    return (
      <TouchableOpacity style={styles.modeContainer} onPress={() => handleModeChange(index)}>
      <Image
        source={isSelected ? require('../../assets/images/bluetime.png') : require('../../assets/images/modegray.png')}
        style={styles.modes}
      />
      <View style={styles.dateTextContainer}>
        <View style={styles.dateText}>
          <Image source={item.image} style={styles.modeOfTherapy} />
        </View>
      </View>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
    <CustomHeader title="Book Appointment" showBackButton />

    <View style={styles.topTHerapistProfile}>
      <Image style={styles.therapistProfile} source={{uri:"https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1600"}}/>
      <Text style={styles.therapistName}>Dr. Samuel Kinyanjui</Text>
      <View style={styles.starsDiv}>
      {Array.from({ length: rating }, (_, index) => (
                  <Image
                    key={index}
                    style={styles.starsInAppointment}
                    source={require("../../assets/icons/star.png")}
                  />
                ))}
      </View>
      <Text style={styles.profileparagraph}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.
      </Text>
    </View>

    <View>
    <Text style={styles.appointmentDateHeading}>Appointment Date</Text>
    </View>

{/* Calendar ... */}
    <View style={styles.bookAppointmentContainer}>
   <Text style={styles.category}>April</Text>

  
   <View style={styles.container}>
      <FlatList
        horizontal
        data={datesData}
        renderItem={renderDateItem}
        keyExtractor={(item,index) => index.toString()}
        contentContainerStyle={styles.dateList}
      />
    </View>

    </View>
{/* Time */}
    <View style={styles.bookAppointmentContainer}>
   <Text style={styles.category}>Time</Text>

  
   <View style={styles.container}>
      <FlatList
        horizontal
        data={hoursIn24HrClock}
        renderItem={renderTimeItem}
        keyExtractor={(item,index) => index.toString()}
        contentContainerStyle={styles.dateList}
      />
    </View>

    </View>
    {/* Mode of Therapy */}

    <View style={styles.bookAppointmentContainer}>
   <Text style={styles.category}>Mode of  Therapy</Text>

  <View >
  <FlatList
        horizontal
        data={modesOfTherapy}
        renderItem={renderMode}
        keyExtractor={(item,index) => index.toString()}
        contentContainerStyle={styles.containermodeOfTherapy}
      />
  </View>
       </View>


       <View>
        <Image  source={require('../../assets/buttons/bookApp.png')} style={styles.bookAppButton}/>
       </View>
    </View>
  )
}

export default BookAppointment