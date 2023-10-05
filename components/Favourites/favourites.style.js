import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
     width:"100%",
     height:"screenHeight",
     fontFamily:"Helvetica",
     marginTop:85,
    },
    favouritescontainer:{
        height:"screenHeight",
    },
    rectangleDiv:{
        height: 140,
        flex:1,
        flexDirection:"row",
        alignSelf:"center",
        width:"90%",
        borderBottomWidth: 1,
        borderBottomColor: "#B4B2B2",
        alignItems:"center",
        marginVertical: 10,
        paddingBottom: 12,
    },
    itemOne:{
        flex:2,
        justifyContent: "center",
    },
    itemTwo:{
        flex:4,
        justifyContent: "start",
        flexDirection:"column",
    },
    itemThree:{
        // flex:1,
        backgroundColor:"white",
        width:20,
        justifyContent: "center",
        borderRadius:"100%",
        height:20,

    },
    ProfileImage:{
        width: 50,
        height: 58,
        borderRadius:"100%",
        boxShadow:"none"
    },
    RemoveIcon:{
        width: 10,
        height:2,
        backgroundColor:"black",
        alignSelf:"center",
    },
    starsDiv:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        gap:5,
          },
          starsInAppointment:{
            width:14,
            height:14,
            marginVertical:10,
            paddingHorizontal:2,
          },
});

export default styles;