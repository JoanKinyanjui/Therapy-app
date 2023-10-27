import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, View ,TouchableWithoutFeedback, Modal, Button} from "react-native";
import styles from "./peer.style";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';

function PeerGroup() {
  const [peerGroups, setPeerGroups] = useState();

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
      visibilityTime: 3000,
  });
}
  const fetchPeerGroups = async () => {
    const response = await fetch(
      "https://therapy-app-backend.vercel.app/api/peer-groups"
    );
    const data = await response.json();
    console.log(data);
    setPeerGroups(data);
  };

  useEffect(() => {
    fetchPeerGroups();
  }, []);

  async function joinGroup(groupId, pseudoName) {
    console.log(groupId,pseudoName)
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(
        `https://therapy-app-backend.vercel.app/api/peer-groups/join/${groupId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({ pseudoName: pseudoName }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Successfully joined the group!");
        fetchPeerGroups();
      } else {
        console.log(data.message || "Error joining group.");
      }
    } catch (error) {
      console.error(error);
      console.log("Error joining group. Please try again.");
    }
  }

  async function joinWaitlist(groupId) {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await fetch(
            `http://therapy-app-backend.vercel.app/api/peer-groups/join-waitlist/${groupId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
      
        const data = await response.json();
        if (!response.ok) {
          console.error("Response not OK:", response.status, response.statusText);
      }
      

        if (response.status === 200) {
            showSuccessNotification(data.message);
            fetchPeerGroups();  
        } else {
            showErrorNotification(data.message);
        }
    } catch (error) {
      console.error("Error in /join-waitlist:", error.message);
        showErrorNotification("Error joining waitlist. Please try again.");
    }
}
  const [pseudoName, setPseudoName] = useState('');
  const [fee,setFee] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
const [currentGroup, setCurrentGroup] = useState(null);
  const modalComponent = (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableWithoutFeedback>
        <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
          <Text   style={{textAlign:"center", fontSize:14, color:"#B4B2B2",marginTop: 5}}>Enter a pseudonym to use in the group :</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, color:"#B4B2B2" ,paddingHorizontal:5 }}
            onChangeText={text => setPseudoName(text)}
          
            value={pseudoName}
          />
            <Text style={{textAlign:"center", fontSize:14, color:"#B4B2B2",marginTop: 5}}>Enter phone number to be used for payment:</Text>
           <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 5,paddingHorizontal:5, color:"#B4B2B2" }}
            onChangeText={text => setFee(text)}
            value={fee}
          />
          <TouchableOpacity
            style={{ marginTop: 20, backgroundColor: '#7CB7FD', padding: 10, alignItems: 'center', borderRadius: 5 }}
            onPress={() => {
              if (currentGroup)  {
                joinGroup(currentGroup._id, pseudoName,fee);
                setModalVisible(false);
                setPseudoName('');  
                setFee('');
              }
            }}
          >
            <Text style={{ color: 'white' }}>Join Group</Text>
          </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
  return (
    <View style={styles.container}>
       {modalComponent}
      <View style={styles.serachDiv}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/icons/search.png")}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="name of a therapist ..."
            style={styles.textInput}
          />
        </View>

        <View style={styles.filterBackground}>
          <Image
            source={require("../../assets/icons/filter.png")}
            style={styles.filterIcon}
          />
        </View>
      </View>

      <View>
        <Text style={styles.topic}>Explore</Text>
      </View>

      <FlatList
        data={peerGroups}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={styles.groupOverallContainer}>
            <View style={styles.groupContainerOne}>
              <Text style={styles.groupContainerOneText}>{item.title}</Text>
              <Text style={styles.percentageMembers}>KES {item.fee}</Text>
            </View>

            <View style={styles.groupContainerTwo}>
              <Text style={styles.groupContainerTwoText}>
                {item.description}
              </Text>
            </View>

            <View style={styles.groupContainerThree}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.groupProfile}
              />
            </View>

            <View style={styles.groupContainerFour}>
              <View style={styles.groupContainerFourSpec}>
                <Image
                  source={require("../../assets/icons/blacklove.png")}
                  style={styles.containerFourIcon}
                />
                <Text style={styles.numbers}>{item.likes}</Text>
              </View>
              <View style={styles.groupContainerFourSpec}>
                <Image
                  source={require("../../assets/icons/members.png")}
                  style={styles.containerFourIcon}
                />
                <Text style={styles.numbers}>{item.members.length}/{item.maxMembers}</Text>
              </View>
              <View style={styles.groupContainerFourSpec}>
                <Image
                  source={require("../../assets/icons/gshare.png")}
                  style={styles.containerFourIcon}
                />
                <Text style={styles.numbers}>20</Text>
              </View>
              <View style={styles.groupContainerFourSpec}>
                {(item.status === 'closed')? (
                 <TouchableOpacity onPress={()=>joinWaitlist(item._id)}>
                   <Image
                    source={require("../../assets/icons/gnotify.png")}
                    style={styles.containerFourIcon}
                  />
                 </TouchableOpacity>
                ) : (
                  <TouchableOpacity  onPress={() => {
                    setCurrentGroup(item);
                    setModalVisible(true);
                  }}>
                    <Image
                      source={require("../../assets/icons/add.png")}
                      style={styles.containerFourIcon}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
          <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

export default PeerGroup;
