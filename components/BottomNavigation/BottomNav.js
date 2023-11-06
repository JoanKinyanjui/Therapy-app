import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';



const BottomNav = () => {

    const route = useRouter();
    const currentRouteName = route.name;
    console.log(currentRouteName)

  return (
    <View  style={styles.bottomNav}>
      <Link href="/home" routeName="home">
          {currentRouteName === 'home' ? (
            <Image
              source={require('../../assets/icons/home.png')} 
              style={styles.imageIconActive}
            />
          ) : (
            <Image
            source={require('../../assets/icons/home.png')} 
              style={styles.imageIconInactive}
            />
          )}
      </Link>

      <Link href="/messages" routeName="messages">
      {currentRouteName === 'home' ? (
            <Image
              source={require('../../assets/icons/messages.png')} 
              style={styles.imageIconActive}
            />
          ) : (
            <Image
            source={require('../../assets/icons/messages.png')} 
              style={styles.imageIconInactive}
            />
          )}
      </Link>

      <Link href="/schedule" routeName="schedule">
      {currentRouteName === 'home' ? (
            <Image
              source={require('../../assets/icons/calendar.png')} 
              style={styles.imageIconActive}
            />
          ) : (
            <Image
            source={require('../../assets/icons/calendar.png')} 
              style={styles.imageIconInactive}
            />
          )}
      </Link>


      <Link href="/favourites" routeName="favorites">
      {currentRouteName === 'favorites' ? (
            <Image
              source={require('../../assets/icons/like.png')} 
              style={styles.imageIconActive}
            />
          ) : (
            <Image
            source={require('../../assets/icons/like.png')} 
              style={styles.imageIconInactive}
            />
          )}
      </Link>

      <Link href="/peer" routeName="account">
      {currentRouteName === 'account' ? (
            <Image
              source={require('../../assets/icons/peer.png')} 
              style={styles.imageIconActive}
            />
          ) : (
            <Image
            source={require('../../assets/icons/peer.png')} 
              style={styles.imageIconInactive}
            />
          )}
      </Link>
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      contentContainer: {
        flexGrow: 1,
      },
      homeContent: {

      },
      bottomNav: {
        position:"absolute",
        bottom: 0,
        width:"100%",
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white', 
        // borderTopWidth: 1, 
        // borderTopColor: '#B4B2B2', 
        // paddingBottom:2
      },
      navItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 10, 
      },
      imageIconActive:{
        width:32,
        height:32,
      },
      imageIconInactive:{
        width:32,
        height:32,
      }
  });
export default BottomNav;
