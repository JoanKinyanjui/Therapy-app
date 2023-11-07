import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View ,ActivityIndicator} from 'react-native';
import styles from "./schedule.style";
import { TouchableOpacity,Linking } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function Schedule() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); 
  };

  const upcomingAppointments = appointments ? appointments.filter(appointment => appointment.status === 'upcoming') : [];
  const pastAppointments = appointments ? appointments.filter(appointment => appointment.status === 'past') : [];
  
  const fetchAppointments = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await fetch('https://therapy-app-backend.vercel.app/api/clients/appointments',{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
          },
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log(data)
        setAppointments(data);
        setLoading(false);
    } catch (err) {
        setError(err.message);
        setLoading(false);
    }
  };
  

useEffect(()=>{
  fetchAppointments();
},[])

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


async function getRoomUrl() {
  try {
    const response = await fetch('https://therapy-app-backend.vercel.app/api/appointment/createRoom', {
      method: 'POST',
    });
    const data = await response.json();
    console.log("Room data:", data);
    return data.url; 
  } catch (error) {
    console.error("Couldn't get room URL:", error);
    return null; 
  }
}

const handlePress = async () => {
  const url = await getRoomUrl(); // Wait for the URL to be retrieved
  console.log(url);
  if (url) {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  } else {
    console.log('No room URL available');
  }
}

if (loading) {
  return <ActivityIndicator size="large" color="#0000ff" />;
}

if (error) {
  return <Text>Error: {error}</Text>;
}

  return (
    <View style={styles.container}>
        <View style={styles.TabPanelDiv}>
        <TouchableOpacity onPress={() => handleTabClick('Tab1')} style={styles.TabPanel}>
        <View style={[{ backgroundColor: activeTab === 'Tab1' ? 'gainsboro' : 'white' },styles.TabPanelBorder]} >
          <Text style={styles.sheduleHeading}>Upcoming Appointments</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('Tab2')} style={styles.TabPanel1}>
        <View style={[{ backgroundColor: activeTab === 'Tab2' ? 'gainsboro' : 'white' },styles.TabPanelBorder]} >
          <Text style={styles.sheduleHeading}>Past Appointments</Text>
          </View>
        </TouchableOpacity>
      </View>

       {/* Tab Content */}
       {activeTab === 'Tab1' && upcomingAppointments.length > 0 && (
       <View>
       <FlatList
               data={upcomingAppointments}
               numColumns={1}
               renderItem={({ item }) => (
                 <View style={styles.pastAppointmentCard}>
       <View style={styles.partOneDiv}>
             <View style={styles.itemOne}>
             <Image style={styles.ProfileImage} source={{uri:item.therapist.image}}/>
             </View>
             <View style={styles.itemTwo}>
              <Text>{item.therapist.name}</Text>
              <View style={styles.starsDiv}>
  {Array.from({ length: item.therapist.rating }, (_, index) => (
              <Image
                key={index}
                style={styles.starsInAppointment}
                source={require("../../assets/icons/rating.png")}
              />
            ))}
  </View>
               </View>
             <View style={styles.itemThree}>
             <Image
             source={require('../../assets/icons/notify.png')}
             style={styles.notify}
             />
             </View>
       </View>
   
       <View style={styles.partTwoDiv}>
             <Text style={styles.dateandTime}>Date and Time</Text>
             <View style={styles.partThreeDiv}>
                <View style={styles.DateDiv}>
                 <Image source={require('../../assets/icons/scheduleblack.png')} style={styles.timeIcons}/>
                 <Text style={styles.dateText} >{item.date} {monthNames[item.month -1].substring(0,3)}, 2023</Text>
                </View>
                <View style={styles.DateDiv}>
                 <Image source={require('../../assets/icons/clock.png')} style={styles.timeIcons}/>
                 <Text style={styles.dateText}> {item.time} </Text>
                </View>
             </View>
       </View>

       <View style={styles.partThreeDiv}>
       <TouchableOpacity style={styles.JoinButtonDivSpecial} onPress={handlePress}>
      <Text style={styles.buttonTextSpecial}>Join</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.JoinButtonDiv}>
      <Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.JoinButtonDiv}>
      <Text style={styles.buttonText}>Reschedule</Text>
    </TouchableOpacity>
  </View>
       </View>
               )}
               keyExtractor={(item) => item._id}
             />
       </View>
      )}


      {activeTab === 'Tab2'  && pastAppointments.length > 0 && (
           <View>
           <FlatList
                   data={pastAppointments}
                   numColumns={1}
                   renderItem={({ item }) => (
                     <View style={styles.pastAppointmentCard}>
           <View style={styles.partOneDiv}>
           <View style={styles.itemOne}>
             <Image style={styles.ProfileImage} source={{uri:item.therapist.image}}/>
             </View>
             <View style={styles.itemTwo}>
              <Text>{item.therapist.name}</Text>
              <View style={styles.starsDiv}>
  {Array.from({ length: item.therapist.rating }, (_, index) => (
              <Image
                key={index}
                style={styles.starsInAppointment}
                source={require("../../assets/icons/rating.png")}
              />
            ))}
  </View>
               </View>
                 <View style={styles.itemThree}>
                 <Image
                 source={require('../../assets/icons/cancelnotification.png')}
                 style={styles.notify}
                 />
                 </View>
           </View>
       
           <View style={styles.partTwoDiv}>
                 <Text style={styles.dateandTime}>Date and Time</Text>
                 <View style={styles.partThreeDiv}>
                    <View style={styles.DateDiv}>
                     <Image source={require('../../assets/icons/scheduleblack.png')} style={styles.timeIcons}/>
                     <Text style={styles.dateText} >{item.date} {monthNames[item.month -1].substring(0,3)}, 2023</Text>
                    </View>
                    <View style={styles.DateDiv}>
                     <Image source={require('../../assets/icons/clock.png')} style={styles.timeIcons}/>
                     <Text style={styles.dateText}>{item.time}</Text>
                    </View>
                 </View>
           </View>
           <View style={styles.partThreeDiv}>
    <TouchableOpacity style={styles.JoinButtonDiv}>
      <Text style={styles.buttonText}>Book A gain</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.JoinButtonDivSpecial}>
      <Text style={styles.buttonTextSpecial}>Leave a Review</Text>
    </TouchableOpacity>
  </View>
           </View>
                   )}
                   keyExtractor={(item) => item._id}
                 />
           </View>
       
      )}

   </View>
   
  )
}

export default Schedule