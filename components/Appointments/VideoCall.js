import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';

function VideoCall() {
  const [roomUrl, setRoomUrl] = useState(null);

  useEffect(() => {
    async function getRoomUrl() {
      try {
        const response = await fetch('https://therapy-app-backend.vercel.app/api/appointment/createRoom',{
          method: 'POST',
        });
        const data = await response.json();
        setRoomUrl(data.url);
        console.log("data" , data);
      } catch (error) {
        console.error("Couldn't get room URL:", error);
      }
    }

    getRoomUrl();
  }, []);

  return roomUrl ? (
    <WebView
      source={{ uri: roomUrl }}
      style={{ flex: 1 }}
    />
  ) : <Text>Loading ...</Text>; 
}

export default VideoCall;
