import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "screenHeight",
        paddingTop: 60,
      },
    serachDiv: {
        paddingHorizontal: 30,
        paddingTop: 30,
        flexDirection: "row",
      },
      inputContainer: {
        flex: 3,
        flexDirection: "row",
        height: 37,
        alignItems: "center",
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 0,
        borderColor: "rgba(100, 99, 99, 0.29)",
      },
      textInput: {
        paddingHorizontal: 10,
      },
      searchIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
        marginLeft: 10,
      },
      filterBackground: {
        backgroundColor: "rgba(100, 99, 99, 0.29)",
        flex: 1,
        height: 37,
        justifyContent: "center",
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
      },
      filterIcon: {
        alignSelf: "center",
        width: 40,
        height: 30,
      },
      topic:{
      fontWeight:"bold",
      fontSize:SIZES.large,
      color:COLORS.primary,
      textAlign: "left",
      paddingHorizontal: 30,
      paddingVertical:20,
      },
      groupOverallContainer:{
        marginBottom:10,
        flexDirection:"column",
        paddingHorizontal:30,
      },
      groupContainerOne:{
      marginVertical:5,
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      },
      groupContainerOneText:{
        fontWeight:"normal",
        fontSize:SIZES.midLarge,
        color:COLORS.secondary,
        fontFamily:"System"
      },
      percentageMembers:{
      fontWeight:"bold",
      fontSize:SIZES.small,
      color:COLORS.primary,
      },
      groupContainerTwo:{
        marginVertical:5,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
       
        },
        groupContainerTwoText:{
            textAlign:"left",
            color:COLORS.tertiary,
        },
        groupContainerThree:{
            marginVertical:5,
            flex:1,
            flexDirection:"row",
        },
        groupProfile:{
         height:140,
         borderRadius:5,
         justifyContent: "center",
         width:"100%",
        },
        groupContainerFour:{
            flex:1,
            flexDirection:"row",
            justifyContent:"space-between",
            marginVertical:5,
            width:"100%",
        },
        groupContainerFourSpec:{
            flexDirection:"row",
            justifyContent:"space-between",
            width:"25%",
            justifyContent:"center",
           alignItems:"center",
           gap:3,
        },
        containerFourIcon:{
            width:20,
            height:20,
        },
        numbers:{
            fontSize:SIZES.xSmall,
            color:COLORS.tertiary,
        },
  
});


export default styles;