import React, { useState } from 'react'
import { Text, View,TouchableOpacity,TextInput,Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './login.style';


function SignUp() {
  
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(false);
    const handleOptionSelect = () => {
      setSelectedOption(!selectedOption);
    };
  
  
    return (
      <View style={styles.container}>
  
        <View >
        <Image source={require('../../assets/images/background.png')} style={styles.image}/>
        <Text style={styles.heading} >Register </Text>
        <Text style={styles.subHeading} > Create your account</Text>
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
            <TextInput  style={styles.authLogin}
             placeholder="Confirm password"
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
          <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.alternativeAuth}>
          <View style={styles.orContinueWith}>
            <View style={styles.childOne}> <Image source={require('../../assets/images/line.png')} style={styles.line}/></View>
            <View style={styles.childTwo} >Or Continue With</View>
            <View style={styles.childThree}> <Image source={require('../../assets/images/line.png')} style={styles.line}/> </View>
          </View>
          <View style={styles.googleIconDiv}>
            <Image source={require('../../assets/images/googleIcon.png')} style={styles.googleIcon}/>
          </View>
        </View>
  
        <View style={styles.dontHave}>
         <Text style={styles.dontHaveText}>Already have an account ?</Text> <Text style={styles.alternativeAuthText}>Login</Text>
        </View>
       
      </View>
  )
}

export default SignUp