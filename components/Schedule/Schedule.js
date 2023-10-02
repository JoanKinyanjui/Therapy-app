import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import CustomHeader from '../CustomHeader/CustomHeader';
import styles from "./schedule.style";

function Schedule() {
  const data = [
    {
      key: "1",
      title: "Individual",
      tagline: "For myself",
      link: "",
      image: "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "2",
      title: "Individual",
      tagline: "For myself",
      link: "",
      image: "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      key: "3",
      title: "Individual",
      tagline: "For myself",
      link: "",
      image: "https://images.pexels.com/photos/5996857/pexels-photo-5996857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ]
  return (
    <View style={styles.container}>
    {/* <Background > */}
   <CustomHeader title="Schedule"  showBackButton />
  <View>
    <Text style={styles.sheduleHeading}>Upcoming Appointments</Text>

    <View style={styles.appointmentCard}>
    <View style={styles.partOneDiv}>
          <View style={styles.itemOne}>
          <Image style={styles.ProfileImage} source={{uri:"https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1600"}}/>
          </View>
          <View style={styles.itemTwo}>
           <Text>Irene Muthoni</Text>
           <View>stars</View>
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
              <Image source={require('../../assets/icons/calendar.png')} style={styles.timeIcons}/>
              <Text style={styles.dateText} >25th Sept, 2023</Text>
             </View>
             <View style={styles.DateDiv}>
              <Image source={require('../../assets/icons/clock.png')} style={styles.timeIcons}/>
              <Text style={styles.dateText}> 04 : 30 PM</Text>
             </View>
          </View>
    </View>
    </View>

    <Text style={styles.sheduleHeading}>Past Appointments</Text>

    <View>
    <FlatList
            data={data}
            numColumns={1}
            renderItem={({ item }) => (
              <View style={styles.pastAppointmentCard}>
    <View style={styles.partOneDiv}>
          <View style={styles.itemOne}>
          <Image style={styles.ProfileImage} source={{uri:"https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1600"}}/>
          </View>
          <View style={styles.itemTwo}>
           <Text>Irene Muthoni</Text>
           <View>stars</View>
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
              <Image source={require('../../assets/icons/calendar.png')} style={styles.timeIcons}/>
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

  </View>
   </View>
   
  )
}

export default Schedule