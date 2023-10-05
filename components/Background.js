import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children }) => {
  return (
  <View style={{backgroundColor:""}}>
      <ImageBackground
      // source={require('../assets/images/background2.png')}
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
    resizeMode: 'cover',
    // backgroundColor:"white",
    justifyContent: 'center', 
  },
});

export default Background;
