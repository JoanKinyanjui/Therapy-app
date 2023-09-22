import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
     width:"100%",
     height:"screenHeight",
     backgroundColor:"white",
    },
    image:{
    width:"100%",
    height:290,
    },
    topBackground:{
       height:"290",
    },
    heading:{
        fontSize:SIZES.large,
        color:COLORS.primary,
        fontFamily:FONTS.primary,
        textAlign:"center",
        marginBottom:10,
        marginTop: 20,
        fontWeight: "600",
    },
    subHeading:{
        fontFamily:FONTS.primary,
        fontSize:SIZES.small,
        color:COLORS.tertiary,
        textAlign:"center",
        marginBottom:"10"
    },
    authInputDiv:{
        height:'max-content',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:18
        },
    authLogin:{
        width:280,
        height: 30,
        marginTop:20,
        fontSize:SIZES.xSmall,
        padding:10,
        backgroundColor:"#EAEBEC",
    },
    passwordDiv:{
        height:"max-content",
        width:280,
        alignSelf:"center",
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        fontSize:SIZES.medium,

    },
    checkboxDiv:{
        flex:1,
        flexDirection:'row',
        alignItems:"center",
     },
     forgotPasswordDiv:{
         flex:1,
         justifyContent:'end',
     },
    checkBox:{
        width:15,
        height:15,
        marginRight:5,
    },
    passwordContentPtag:{
        color:COLORS.uni,
        fontSize:SIZES.small,
        alignSelf:"flex-end"
        
    },
   authButton:{
    width:280,
    height:45,
    backgroundColor:"#7CB7FD",
    borderRadius: 3,
    alignContent:"center",
    justifyContent:"center",
    alignSelf:"center",
    marginVertical:48,
   },
   buttonText:{
    textAlign:"center",
    color:'white'
   },
   dontHave:{
    height:"max-content",
    width:280,
    alignSelf:"center",
    flex:1,
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    paddingBottom: 20,
    paddingTop:10,
   },
   alternativeAuthText:{
    fontFamily:FONTS.primary,
    color:COLORS.primary,
    fontWeight:600,
    marginLeft:10,
    fontSize:SIZES.small,
    },
    dontHaveText:{
        color:COLORS.uni,
        fontSize:SIZES.small,
    },
    alternativeAuth:{
        flexDirection:'column',
        // justifyContent: 'center',
        // alignItems:"center",
        alignSelf:"center",
        // backgroundColor:"red",
        width:"80%",
        gap:10,
    },
    orContinueWith:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    childOne:{
      flex:1,
      textAlign:"center",
      justifyContent:"center",
      alignItems:"center",
    },
    childTwo:{
        flex:1,
        textAlign:"center",
        color:COLORS.uni,
        fontSize:SIZES.small,
        alignSelf:"flex-end"
      },
    childThree:{
        flex:1,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center"
      },
      googleIconDiv:{
        alignSelf:"center",
        paddingVertical: 5
      },
      line:{
        width: 60,
        height:2
      },
    googleIcon:{
         width:30,
         height:30,
         borderRadius: 10,
    },
});


export default styles;