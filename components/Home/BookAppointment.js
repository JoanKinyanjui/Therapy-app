import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import styles from "./home.style";
import CustomHeader from '../CustomHeader/CustomHeader';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { FlatList } from 'react-native';

function BookAppointment() {
  const rating = 3;
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

  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const handleDatePress = (index) => {
    setSelectedDateIndex(index); // Update the selected date index
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
    const isSelected = index === selectedDateIndex;
    return (
      <TouchableOpacity style={styles.dateContainer}>
     <Image
          source={isSelected ? require('../../assets/images/bluetime.png') : require('../../assets/images/timegray.png')}
          style={styles.dates}
        />
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>{item.time}</Text>
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
        data={datesData}
        renderItem={renderTimeItem}
        keyExtractor={(item,index) => index.toString()}
        contentContainerStyle={styles.dateList}
      />
    </View>

    </View>\
    {/* Mode of Therapy */}

    <View style={styles.bookAppointmentContainer}>
   <Text style={styles.category}>Mode of  Therapy</Text>

  <View style={styles.containermodeOfTherapy}>
  <View style={styles.dateContainer}>
        <Image source={require('../../assets/images/timegray.png')} style={styles.dates} />
        <View style={styles.dateTextContainer}>
          <View style={styles.dateText}>
            <Image source={require('../../assets/icons/call.png')} style={styles.modeOfTherapy}/>
          </View>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Image source={require('../../assets/images/timegray.png')} style={styles.dates} />
        <View style={styles.dateTextContainer}>
          <View style={styles.dateText}>
            <Image source={require('../../assets/icons/video.png')} style={styles.modeOfTherapy}/>
          </View>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Image source={require('../../assets/images/timegray.png')} style={styles.dates} />
        <View style={styles.dateTextContainer}>
          <View style={styles.dateText}>
            <Image source={require('../../assets/icons/messages.png')}  style={styles.modeOfTherapy}/>
          </View>
        </View>
      </View>
  </View>
       </View>


       <View>
        <Image  source={require('../../assets/buttons/bookApp.png')} style={styles.bookAppButton}/>
       </View>
    </View>
  )
}

export default BookAppointment