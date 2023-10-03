import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
     width:"100%",
     height:"screenHeight",
     fontFamily:"Helvetica",
    },
    sheduleHeading:{
     fontSize: SIZES.midLarge,
     color:COLORS.primary,
     flex:1,
     alignSelf:"center",
     marginVertical: 15,
    },
     appointmentCard:{
        width:300,
        height:140,
        backgroundColor:"#E4F5FE",
        alignSelf:"center",
        borderRadius:8,
        marginBottom:20,
    },
   pastAppointmentCard:{
        width:300,
        height:140,
        backgroundColor:"gainsboro",
        alignSelf:"center",
        marginBottom:20,
        borderRadius:8,
    },
    partOneDiv:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:10,
    alignItems:"center",
    marginVertical:10,
    },
    itemOne:{
     flex:2,
    },
    itemTwo:{
        flex:4,
        flexDirection:'column',
        fontSize:SIZES.small,
        gap:5,
       },
    itemThree:{
     flex:1,
    },
    notify:{
    width: 20,
    height:20,
    alignSelf:"center",
    }, 
    ProfileImage:{
        width: 50,
        height: 58,
        borderRadius:"100%",
        boxShadow:"none",
        
    },
    partTwoDiv:{
     flex:1,
     justifyContent:"flex-start",
     paddingHorizontal:10,
     paddingVertical:10,
    },
    dateandTime:{
     color:COLORS.secondary,
     fontSize:SIZES.small,
     fontWeight:600,
     paddingVertical:5,
     
    },
    partThreeDiv:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    gap:30
    },
    DateDiv:{
    flex:1,
    flexDirection:"row",
   alignItems:"center",
    gap:5,
    },
    timeIcons:{
        width:20,
        height:20,
    },
    dateText:{
        fontSize:SIZES.small,
        color:COLORS.uni
    }

});

export default styles;