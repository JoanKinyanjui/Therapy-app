import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './signUp';
import HomePage from './home';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
// import { Stack } from 'expo-router';

function LoadingPage() {
  return (<Text>Loading...</Text> )
}


export default function IndexPage() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 2000); 
  }, []);

  if (loading) {
      return <LoadingPage />;
  } else if (token) {
      return <HomePage />;
  } else {
      return <SignUp />;
  }

}

