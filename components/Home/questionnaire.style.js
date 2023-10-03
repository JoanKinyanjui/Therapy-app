import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "screenHeight",
    position: "relative",
    fontFamily:"Helvetica",
  },
  topContainer: {
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
  },
  paraOne: {
    fontSize: 15,
    fontWeight: 500,
    color: COLORS.secondary,
    alignSelf: "center",
    marginVertical: 5,
  },
  paraTwo: {
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.primary,
    alignSelf: "center",
    marginVertical: 5,
  },
  paraThree: {
    fontSize: SIZES.small,
    fontWeight: 400,
    color: COLORS.tertiary,
    alignSelf: "center",
    marginVertical: 5,
  },
  questionIndex:{
   paddingHorizontal:30,
   marginVertical:20,
  },
  questionStyle:{
   fontSize: 15,
   fontWeight:400,
  },
  optionArrayContainer:{
    flex: 1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    marginTop:3

  },
  option:{
    fontSize:14,
    paddingHorizontal:30,
    color:COLORS.tertiary,
    paddingVertical:5,
  },
  optionContainer:{
    borderRadius:16,
    marginHorizontal:10,
    marginVertical: 5,
  
  },
  ButtonDiv:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical:10
  }
 
})

export default styles;