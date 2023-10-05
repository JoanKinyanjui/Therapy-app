import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const LinearGradientBackground = ({ children }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7CB7FD","#7CB7FD","#3223D5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={styles.linearGradient}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default LinearGradientBackground;
