import {View,Text,ScrollView,SafeAreaView} from 'react-native';
import { useState } from 'react';
import { Stack,useRouter } from 'expo-router';
import {COLORS,images,icons} from '../constants';
import {Account,Login,SignUp,Favourites,Home,Questionnaire,Match,Messages,Schedule,Subscriptions} from '../components'
import { useFonts } from 'expo-font';


const IndexPage =()=>{
    const router = useRouter();
    // const [loaded] = useFonts({
    //     'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    //     'Poppins-Bold': require('../assets/fonts/ Poppins-Bold.ttf'),
    //   });
    
    //   if (!loaded) {
    //     console.log('not loaded')
    //     return null; 
    //   }

    return(
       <SafeAreaView>
      
           <Stack.Screen
           options={{headerStyle:{backgroundColor:COLORS.gray}}}
           headerTitle=''
        
           />
           <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1}} >
                {/* <Account /> */}
                {/* <Home /> */}
                {/* <Questionnaire /> */}
                {/* <Match /> */}
                {/* <Messages /> */}
                {/* <Favourites /> */}
                {/* <Schedule /> */}
                {/* <Subscriptions /> */}
            </View>
           </ScrollView>
       
       </SafeAreaView>
    )
}

export default IndexPage;