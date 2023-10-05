import React, { useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native';
import styles from "./schedule.style";
import { TouchableOpacity } from 'react-native';

function Schedule() {
  const rating = 3;
  const data = [
    {
      key: "1",
      name: "Davis Thoya",
      tagline: "For myself",
      link: "",
      image: "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "2",
      name: "Stella Mugure",
      tagline: "For myself",
      link: "",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      key: "3",
      name: "Phoebe Sawe",
      tagline: "For myself",
      link: "",
      image: "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ]

  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); 
  };
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
       {activeTab === 'Tab1' && (
       <View style={styles.appointmentCard}>
       <View style={styles.partOneDiv}>
             <View style={styles.itemOne}>
             <Image style={styles.ProfileImage} source={{uri:"https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1600"}}/>
             </View>
             <View style={styles.itemTwo}>
              <Text>Irene Muthoni</Text>
              <View style={styles.starsDiv}>
      {Array.from({ length: rating }, (_, index) => (
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
                 <Text style={styles.dateText} >25th Sept, 2023</Text>
                </View>
                <View style={styles.DateDiv}>
                 <Image source={require('../../assets/icons/clock.png')} style={styles.timeIcons}/>
                 <Text style={styles.dateText}> 04 : 30 PM</Text>
                </View>
             </View>
       </View>
       </View>
      )}
      {activeTab === 'Tab2' && (
           <View>
           <FlatList
                   data={data}
                   numColumns={1}
                   renderItem={({ item }) => (
                     <View style={styles.pastAppointmentCard}>
           <View style={styles.partOneDiv}>
                 <View style={styles.itemOne}>
                 <Image style={styles.ProfileImage} source={{uri:item.image}}/>
                 </View>
                 <View style={styles.itemTwo}>
                  <Text>{item.name}</Text>
                  <View style={styles.starsDiv}>
      {Array.from({ length: rating }, (_, index) => (
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
                     <Text style={styles.dateText} >25th Sept, 2023</Text>
                    </View>
                    <View style={styles.DateDiv}>
                     <Image source={require('../../assets/icons/clock.png')} style={styles.timeIcons}/>
                     <Text style={styles.dateText}> 04 : 30 PM</Text>
                    </View>
                 </View>
           </View>
           </View>
                   )}
                   keyExtractor={(item) => item.key}
                 />
           </View>
       
      )}

   </View>
   
  )
}

export default Schedule