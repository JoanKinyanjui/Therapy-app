import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
      container:{
     width:"100%",
     height:"screenHeight",
    },
    backgroundImage: {
        height:"maxHeight",
        position:"relative",
      },
      accountProfile:{
      width:100,
      height:100,
      borderRadius:"100%",
      borderColor: COLORS.primary, 
      borderWidth: 3,    
      borderStyle: 'solid',
      position:'absolute',
      bottom:35,
      left: '50%', 
      marginLeft: -50,
      },
      editIcon:{
      width: 20,
      bottom:42,
      left: '75%', 
      marginLeft: -40,
      height:20,
      },
      personalDetails:{
      flex: 1,
      justifyContent: 'center',
      borderBottom:1,
      textAlign: 'center',
      bottom:20,
      borderBottomWidth:1,
      borderBottomColor:COLORS.tertiary,
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
      }
});

export default styles;