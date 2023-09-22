import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Background = () => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/background.png')} style={{ ...styles.backgroundImage, height: screenHeight }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});

export default Background;
