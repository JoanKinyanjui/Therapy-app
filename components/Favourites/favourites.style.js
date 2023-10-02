import { StyleSheet } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
     width:"100%",
     height:"screenHeight",
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
        flex:1,
    },
    ProfileImage:{
        width: 50,
        height: 58,
        borderRadius:"100%",
        boxShadow:"none"
    },
    RemoveIcon:{
        width: 26,
        height:3,
        backgroundColor:"#7CB7FD"
    }
});

export default styles;