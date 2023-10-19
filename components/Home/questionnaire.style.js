import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "screenHeight",
    position: "relative",
    fontFamily:"System",
    marginTop: 85,
  },
  topContainer: {
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
  },
  paraOne: {
    fontSize: 15,
    color: COLORS.secondary,
    alignSelf: "center",
    marginVertical: 5,
  },
  paraTwo: {
    fontSize: 17,
   fontFamily:"System",
   fontWeight:"bold",
    color: COLORS.primary,
    alignSelf: "center",
    marginVertical: 5,
  },
  paraThree: {
    fontSize: SIZES.small,
    // fontWeight: 400,
    color: COLORS.tertiary,
    alignSelf: "center",
    marginVertical: 5,
  },
  questionIndex:{
   paddingHorizontal:25,
   marginVertical:20,
  },
  questionStyle:{
   fontSize: 16,
  //  fontWeight:500,
   marginBottom:3
  },
  optionArrayContainer:{
    flex: 1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"flex-start",
    marginTop:3

  },
  option:{
    fontSize:SIZES.medium,
    paddingHorizontal:30,
    color:COLORS.tertiary,
    paddingVertical:5,
  },
  optionContainer:{
    borderRadius:16,
    marginRight:10,
    marginVertical: 5,
  
  },
  button: {
    width: 240,
    height: 43,
    color: "white",
    alignSelf: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: SIZES.medium,
    alignSelf: "center",
    alignContent: "center",
  },
  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,  
    backgroundColor:"#7CB7FD"
  },
 
})

export default styles;