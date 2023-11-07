import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

function VideoCall() {
  const [roomUrl, setRoomUrl] = useState(null);
  const [startCall, setStartCall] = useState(false);

  useEffect(() => {
    async function getRoomUrl() {
      try {
        const response = await fetch('https://therapy-app-backend.vercel.app/api/appointment/createRoom', {
          method: 'POST',
        });
        const data = await response.json();
        setRoomUrl(data.url);
        console.log("Room data:", data);
      } catch (error) {
        console.error("Couldn't get room URL:", error);
      }
    }

    getRoomUrl();
  }, []);

  if (startCall && roomUrl) {
    return (
<WebView
 mixedContentMode="compatibility"
 javaScriptEnabled={true}
 domStorageEnabled={true}
 allowsInlineMediaPlayback={true} 
 mediaPlaybackRequiresUserAction={false} 
 mediaPlaybackRequiresUserGesture={false} 
  style={{ flex: 1 }}
  onError={(syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.error('WebView error: ', nativeEvent);
  }}
  onHttpError={(syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.error('HTTP error: ', nativeEvent.statusCode);
  }}
  startInLoadingState={true}
  renderLoading={() => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
      <Text>Loading...</Text>
    </View>
  )}
/>

    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {roomUrl ? (
        <TouchableOpacity
          onPress={() => setStartCall(true)}
          style={{ padding: 20, backgroundColor: 'blue', borderRadius: 5, marginTop: 50, }}>
          <Text style={{ color: 'black' }}>Start Video Call</Text>
        </TouchableOpacity>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default VideoCall;
