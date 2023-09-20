import React, { useState } from 'react'
import { Text, View,TouchableOpacity,TextInput,Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './login.style';


function Login() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(false);
  const handleOptionSelect = () => {
    setSelectedOption(!selectedOption);
  };


  return (
    <View style={styles.container}>

      <View >
      <Image source={require('../../assets/images/background.png')} style={styles.image}/>
      <Text style={styles.heading} >Welcome Back </Text>
      <Text style={styles.subHeading} >Log into your account </Text>
      </View>
      
      <View style={styles.authInputDiv}>
      <TextInput  style={styles.authLogin}
             placeholder="Enter email"
             placeholderTextColor="#999" 
             />
            <TextInput  style={styles.authLogin}
              placeholder="Enter password"
              placeholderTextColor="#999" 
              />
      </View>

      <View style={styles.passwordDiv}>
         <View style={styles.checkboxDiv}>
       <TouchableOpacity onPress={handleOptionSelect}>
       <Image
              source={
                selectedOption
                  ? require('../../assets/images/checkBoxTicked.png') 
                  : require('../../assets/images/checkboxRectangle.png') 
              }
              style={styles.checkBox}
            />

       </TouchableOpacity>
          <Text style={styles.passwordContentPtag}>Remember me</Text>
         </View>
        <View style={styles.forgotPasswordDiv}> <Text style={styles.passwordContentPtag}>Forgot password ?</Text></View>
      </View>

      <View>
        <TouchableOpacity style={styles.authButton}>
        <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dontHave}>
       <Text style={styles.dontHaveText}>Dont have an account?</Text> <Text style={styles.alternativeAuthText}>SignUp</Text>
      </View>
     
    </View>
  )
}

export default Login