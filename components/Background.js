import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children }) => {
  return (
  <View style={{backgroundColor:"white"}}>
      <ImageBackground
      source={require('../assets/images/background2.png')}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height:"max-height",
    flex: 1,
    resizeMode: 'cover', // You can adjust the image resize mode as needed
    justifyContent: 'center', // Center content vertically
  },
});

export default Background;
