import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
      container:{
     width:"100%",
     height:"screenHeight",
     fontFamily:"System",
     marginTop:80,
    },
    backgroundImage: {
        height:"maxHeight",
      },
      accountProfile:{
      alignSelf:"center",
      width:100,
      height:100,
      borderRadius: 50,
      borderColor: COLORS.primary, 
      borderWidth: 3,    
      borderStyle: 'solid',
      marginVertical:10,
      },
      editIcon:{
      width: 20,
      alignSelf:"flex-end",
      marginHorizontal:100,
      height:20,
      },
      personalDetails:{
      flex: 1,
      justifyContent: 'center',
      borderBottom:1,
      textAlign: 'center',
      borderBottomWidth:1,
      borderBottomColor:COLORS.tertiary,
      paddingBottom:20,
      },
      name:{
      textAlign: 'center',
      fontSize:SIZES.medium
      },
      phoneNumber:{
      textAlign:"center",
      marginTop:5,
      color:COLORS.uni,
      },
      accountMenu:{
      flex:1,
      flexDirection: 'row',
      alignItems:"center",
      paddingVertical:10,
      marginVertical:5,
      },
      imageDiv:{
      flex:1,
      },
      imageIcon:{
      width :22,
      alignSelf:"center",
      height :22,
      },
      menuPTag:{
            flex:3,
            fontSize:SIZES.medium,
      },
      menuPrice:{
            flex:1,
            fontSize:SIZES.xSmall,
            color:COLORS.uni
      },
      input:{
            width:"55%",
            height:10,
            alignSelf:"center",
            backgroundColor: "rgba(220, 220, 220, 0.7)",
            borderRadius:3,
            color:COLORS.uni,
            textAlign:"center",
            marginVertical:3,
            paddingVertical:10,
      },
      inputPassword:{
            justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:5,
            width:"55%",
            flexDirection:"row",
            height:10,
            alignSelf:"center",
            backgroundColor: "rgba(220, 220, 220, 0.7)",
            borderRadius:3,
            color:COLORS.uni,
            textAlign:"center",
            marginVertical:3,
            paddingVertical:12,
      },
      button: {
            width: 100,
            height: 33,
            color: "white",
            alignSelf: "center",
            marginTop: 20,
          },
          buttonText: {
            color: "white",
            fontSize: SIZES.small,
            alignSelf: "center",
            alignContent: "center",
          },
          buttonContent: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            backgroundColor: "#7CB7FD",
          },
});

export default styles;