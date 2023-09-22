import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
     width:"100%",
     height:"screenHeight",
     position:"relative",
    },
    topContainer:{
     width:"90%",
     alignSelf:"center",
     textAlign:"center",

    },
    paraOne:{
      fontSize: 15,
      fontWeight: 500,
      color:COLORS.secondary,
      alignSelf:"center",
      marginVertical:5,
    },
    paraTwo:{
        fontSize: 16,
        fontWeight: 700,
        color:COLORS.primary,
        alignSelf:"center",
        marginVertical:5,
    },
    paraThree:{
        fontSize: SIZES.small,
        fontWeight: 400,
        color:COLORS.tertiary,
        alignSelf:"center",
        marginVertical:5,
    },
    bottomContainer:{
        width:"90%",
        alignSelf:"center",
        marginTop: 30,
    },
    rectangleDiv:{
        width:270,
        height:130,
        marginBottom:25,
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"flex-end",
        //  width:"100%",
        height:"screenHeight",
    },
    // gradient: {
    //   flex: 1,
    // },
    gridItem: {
        flexDirection: 'column',
        justifyContent:"space-between",
        marginBottom: 10,
        paddingLeft:10,
        paddingHorizontal:8,
      },
      wording:{
        flexDirection: 'row',
       width:"100%",
        justifyContent:"space-between",
      },
      word1: {
        fontSize:SIZES.medium,
        color:"white",
        fontWeight:700,
        paddingBottom:2,
        textAlign:"left"
      },
      word2: {
        width:"100%",
        fontSize:SIZES.small,
        color:COLORS.tertiary,
        fontWeight:300,
       alignSelf:'flex-start'
      },
      arrow: {
        width: 25,
        height:16
      },
});
export default styles;