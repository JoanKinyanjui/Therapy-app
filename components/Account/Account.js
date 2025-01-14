import React, { useContext, useEffect, useState } from "react";
import { FlatList, ImageBackground, Text, TextInput } from "react-native";
import { Image, View } from "react-native";
import styles from "./account.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Toast from 'react-native-toast-message';
import { launchImageLibrary } from 'react-native-image-picker';


function Account() {
  //Token Acquiring
  const [tokenString, setTokenString] = useState();
  const [client, setClient] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter()

  const showSuccessNotification = (text) => {
    Toast.show({
        type: 'success', 
        text2: text,
        visibilityTime: 2000,
        position: 'bottom',
    });
}
const showErrorNotification = (text) => {
  Toast.show({
      type: 'error', 
      text2: text,
      visibilityTime: 2000,
  });
}

  async function fetchData() {
    try {
      const token = await AsyncStorage.getItem("token");
      const clientDetails = JSON.parse(await AsyncStorage.getItem("client"));
      
      if (token && clientDetails && clientDetails._id) {
        setTokenString(token);
        
        const response = await fetch(`https://therapy-app-backend.vercel.app/api/clients/client/${clientDetails._id}`);
        if (response.ok) {
          const data = await response.json();
          setClient(data);
          console.log(data,token);
        } else {
          setError('Client not found.');
        }
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('client');
      console.log()
      router.push('/login')
  
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
 

  const data = [
    {
      key: "1",
      menu: "My Wallet",
      icon: require("../../assets/icons/wallet.png"),
      price: "KES 2500",
    },
    {
      key: "2",
      menu: "Subscription Plan",
      icon: require("../../assets/icons/subscription.png"),
      price: "Regular",
    },
    {
      key: "3",
      menu: "Notifications",
      icon: require("../../assets/icons/notify.png"),
      price: "",
    },
    {
      key: "4",
      menu: "Terms of Use",
      icon: require("../../assets/icons/terms.png"),
      price: "",
    },
    {
      key: "5",
      menu: "Faqs",
      icon: require("../../assets/icons/faqs.png"),
      price: "",
    },
  ];

  const [image, setImage] = useState(client?.image);

  const isBase64 = (str) => {
    if (str.startsWith('data:image')) {
      return true;
    }
    return false;
  };

const uploadToCloudinary = async (uri) => {
  console.log('==>', uri)
  const formData = new FormData();
  if (isBase64(uri)) {
    formData.append('file', uri);
  } else {
    formData.append('file', {
      uri,
      type: 'image/jpeg',
      name: 'profile.jpg',
    });
  }
  formData.append("upload_preset", "better-you");
  formData.append("cloud_name", "dbvffmwhe"); 
  console.log(formData);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dbvffmwhe/image/upload`,{
      method: 'POST',
      body:formData
    }
    );
    const data = await response.json();
    console.log('====>', data)
    if (data) {
      setImage(data.secure_url); 
    } else {
      console.log('Failed to upload image to Cloudinary:', data);
    }
  } catch (error) {
    console.log('Error uploading to Cloudinary: ', error);
  }
};



const selectImage = () => {
  const options = {
    mediaType: 'photo',
    quality: 1,
  };

  launchImageLibrary(options, async(response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.assets && response.assets.length > 0) {
      const source = { uri: response.assets[0].uri };
      console.log("source ==>",source)
      await uploadToCloudinary(source.uri); 
    }
  });
};


const handleSave = async () => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await fetch("https://therapy-app-backend.vercel.app/api/clients/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        username: client.username,
        phoneNumber: client.phoneNumber,
        password: client.password,
        email: client.email,
        image: image,
        clientId: client._id,
      }),
    });

    if (response.status === 200) {
      const { clientData ,newPassword,message} = await response.json();
      setClient({
        ...client,
        email: clientData.email,
        password: newPassword,
        username: clientData.username,
        phoneNumber: clientData.phoneNumber,
      });
      setIsEditing(false);
      showSuccessNotification(message)
    } else {
      showErrorNotification( data.message )
    }
  } catch (error) {
    showErrorNotification("There was an error updating.Please try again later");
  }
};
  
  return (
    <View style={styles.container}>
      <View>
      {isEditing ? (
    <TouchableOpacity onPress={selectImage}>
      <Image
        source={{ uri: image || 'default-image-url-here' }} // Replace with your default image URL
        style={styles.accountProfile}
      />
    </TouchableOpacity>
  ) : (
    <Image
      source={{ uri: client?.image || 'default-image-url-here' }} // Replace with your default image URL
      style={styles.accountProfile}
    />
  )}
      {/* <Image
        source={{ uri: client && client.image ? client.image : 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_640.png'}}
        style={styles.accountProfile}
      /> */}
  
        <TouchableOpacity onPress={() => setIsEditing(true)}>
          <Image
            source={require("../../assets/icons/edit.png")}
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
{client && 
      <View style={styles.personalDetails}>
        {isEditing ? <TextInput value={client.username} onChangeText={(text) => setClient({ ...client, username: text })} style={styles.input} /> : <Text style={styles.name}>{client.username}</Text>}
        {isEditing ? <TextInput value={client.phoneNumber} onChangeText={(text) => setClient({ ...client, phoneNumber: text })} style={styles.input} /> : <Text style={styles.phoneNumber}>{client.phoneNumber}</Text>}
        {isEditing ? <TextInput value={client.email} onChangeText={(text) => setClient({ ...client, email: text })} style={styles.input} /> : <Text style={styles.phoneNumber}>{client.email}</Text>}
        {isEditing ? (
          <View style={styles.inputPassword}>
            <TextInput value={client.password} onChangeText={(text) => setClient({ ...client, password: text })} style={styles.inputSpec} secureTextEntry={!isPasswordVisible} />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Text style={{ fontSize: "8px", paddingRight: "5px" }}>{isPasswordVisible ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </View>
        ) : <Text style={styles.phoneNumber}>{"*******"}</Text>}
        {isEditing && <TouchableOpacity style={styles.button} onPress={handleSave}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>}
      </View>}

      <View style={{ marginTop: "20px" }}>
        <FlatList
          data={data}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={styles.accountMenu}>
              <View style={styles.imageDiv}>
                <Image source={item.icon} style={styles.imageIcon} />
              </View>
              <Text style={styles.menuPTag}>{item.menu}</Text>
              <Text style={styles.menuPrice}> {item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
        <TouchableOpacity style={styles.accountMenu} onPress={handleLogout}>
          <View style={styles.imageDiv}>
            <Image
              source={require("../../assets/icons/logout.png")}
              style={styles.imageIcon}
            />
          </View>
          <Text style={styles.menuPTag}>Log Out</Text>
          <Text style={styles.menuPrice}></Text>
        </TouchableOpacity>
      </View>
      <Toast  />
    </View>
  );
}

export default Account;
