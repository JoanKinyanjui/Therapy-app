import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: 60,
      backgroundColor: 'transparent',
      marginVertical:20
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
