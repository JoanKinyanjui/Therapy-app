import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
      container:{
     width:"100%",
     fontFamily:"Helvetica",
     marginTop:85,
     flex:1,
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
        alignItems:"flex-end",
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
        gap:7,
    },
    itemThree:{
        flex:1,
    },
    ProfileImage:{
        width: 45,
        height: 53,
        borderRadius:"100%",
        boxShadow:"none",
        alignSelf:"center",
        
    },
    RemoveIcon:{
        width: 26,
        height:3,
        backgroundColor:"#7CB7FD"
    },
    name:{
     fontWeight:500,
    },
    time:{
    color:COLORS.tertiary,
    fontSize:SIZES.xSmall,
    },
    message:{
     color:COLORS.tertiary,
     fontSize:SIZES.small,
    },
});

export default styles;