import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    header: {
      position: 'absolute',
      top: 0,
      height: 80,
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop:5,
      paddingBottomL:5,
      height: 60,
      paddingHorizontal:30,
      backgroundColor:"white",
      // borderWidth:1,
      // borderColor: "#7CB7FD",
    },
    title: {
      fontSize: 18,
      fontWeight: 'medium',
      fontFamily: 'Poppins',
    },
    accountStyle:{
      width:55,
      height: 55,
      borderWidth:3,
      borderColor:COLORS.primary,
      resizeMode: "cover",
      borderRadius:"100%"
    }
    });

  export default styles;
