import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
     width:"100%",
     height:"screenHeight",
     fontFamily:"System",
     marginTop:15,
    },
    favouritescontainer:{
        height:"screenHeight",
    },
    rectangleDiv:{
        height: 70,
        flex:1,
        flexDirection:"row",
        alignSelf:"center",
        width:"90%",
        borderBottomWidth: 1,
        borderBottomColor: "#B4B2B2",
        alignItems:"center",
        marginVertical: 10,
        paddingVertical: 10,
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
    nameFavourites:{
        color:COLORS.uni,
    },
    itemThree:{
        width:20,
        justifyContent: "center",
        height:20,

    },
    ProfileImage:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    RemoveIcon:{
        width: 10,
        height:3,
        backgroundColor:"gray",
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