import {View,Text,ScrollView,SafeAreaView} from 'react-native';
import { useState } from 'react';
import { Stack,useRouter } from 'expo-router';
import {COLORS,images,icons} from '../constants';
import {Account,Login,SignUp,Favourites,Home,Questionnaire,Match,Messages,Schedule,Subscriptions} from '../components'
import { useFonts } from 'expo-font';
import BottomNav from '../components/BottomNavigation/BottomNav';


const IndexPage =()=>{
    const router = useRouter();

    return(
       <SafeAreaView>
      
           <Stack.Screen
           options={{headerShown:false}}
           headerTitle=''
           />
           <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1}} >
                {/* <Account /> */}
                <Home />
                <BottomNav />
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