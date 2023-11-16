import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';

const LoadingComponent = () => {
  const scale = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.4,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start(() => {
      animate(); 
    });
  };

  
  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello from LoadingComponent</Text>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#7CB7FD',
    marginHorizontal: 5,
  },
});

export default LoadingComponent;
