import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "screenHeight",
    position: "relative",
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
  bottomContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },
  rectangleDiv: {
    width: 270,
    height: 130,
    marginBottom: 25,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    //  width:"100%",
    height: "screenHeight",
  },
  gradient: {
    flex: 1,
  },
  gridItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingLeft: 10,
    paddingHorizontal: 8,
  },
  wording: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  word1: {
    fontSize: SIZES.medium,
    color: "white",
    fontWeight: 700,
    paddingBottom: 2,
    textAlign: "left",
  },
  word2: {
    width: "100%",
    fontSize: SIZES.small,
    color: COLORS.tertiary,
    fontWeight: 300,
    alignSelf: "flex-start",
  },
  arrow: {
    width: 25,
    height: 16,
  },

  // Match Styles
  serachDiv: {
    paddingHorizontal: 30,
    // flex: 1,
    flexDirection: "row",
  },
  inputContainer: {
    flex:3,
    flexDirection: "row",
    height: 37,
    alignItems: "center",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderColor: "rgba(100, 99, 99, 0.29)",
    borderWidth: 1,
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
  },
  filterIcon: {
    alignSelf: "center",
    width:40,
    height:30,
  },
  textHeading:{
    color:COLORS.secondary,
    fontSize:SIZES.medium,
    alignSelf:"center",
    marginVertical:20,
  },
  card: {
    margin: 10,
    width: "45%",
    height:250,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row', 
  },
  content: {
    width: '100%',
    paddingHorizontal:4,
    position:"absolute",
    bottom:3,
    left:0,
  },
  name: {
    fontSize: SIZES.xSmall,
    fontWeight: 500,
    color: 'white',
  },
  rating: {
    flex: 2,
    flexDirection:"row",
    // backgroundColor:"green",
    alignItems: "center",
    paddingTop:5,
    alignItems:"center",
    gap:4,
  },
  specializations: {
    fontSize: 9,
    color: COLORS.tertiary,
    fontStyle:"italic",
    marginTop: 5,
    fontWeight: 100,
  },
  likeIconContainer: {
    position: "absolute",
    top: 0, 
    right: 0, 
    borderRadius: 50, 
    padding: 5,
    // zIndex: 1, 
  },
  stars:{
    width: 13,
    height:13,
  },
  moneyDiv:{
    flex: 1,
    flexDirection:"row",
    justifyContent: "space-between",
    // alignItems:"center",
    // alignContent:"center",
  },
  moneyText:{
    fontSize: 9,
    color: COLORS.primary,
    paddingHorizontal:4,
    flex:1,
    fontWeight: 500,
    backgroundColor:"rgba(100, 99, 99, 0.4);",
    justifyContent: "center",
    alignContent:"center",
    alignItems:"center",
    height:20,
    borderRadius:50,
    marginHorizontal:5,
  },
  gridContainer:{
    flex:1,
    justifyContent: "space-between",
    paddingHorizontal:10,
  },


  // Book an Appointment 

  therapistProfile:{
  width:120,
  height:120,
  borderRadius:"100%",
  alignSelf:"center",
  },
  starsDiv:{
flex:1,
flexDirection:"row",
justifyContent:"center",
gap:10,
  },
  starsInAppointment:{
    width:22,
    height:22,
  },
  topTHerapistProfile:{
    paddingHorizontal:30,
    flex:1,
    flexDirection:"column",
    justifyContent: "center",
    gap:10,
    borderBottomWidth:1,
    borderBottomColor: COLORS.tertiary,
    paddingBottom:20,
  },
  profileparagraph:{
    fontSize:SIZES.small,
    fontWeight: 100,
    color: COLORS.uni,
    textAlign: "center",
  },
  therapistName:{
   fontWeight:500,
   fontSize:SIZES.small,
   alignSelf:"center",
  },
  appointmentDateHeading:{
   fontSize:SIZES.midLarge,
   color: COLORS.primary,
   alignSelf:"center",
  },
  category:{
  textAlign:"start",
  color: COLORS.secondary,
  fontSize:SIZES.medium,
  paddingVertical:20,
  marginLeft:20,
  },
  bookAppointmentContainer:{
    // backgroundColor: "blue",
  },
  dates:{
    width:70,
    height:80,
    resizeMode:"contain",
  },
  dateContainer:{
    alignItems: 'center',
    justifyContent: 'center', 
    marginHorizontal:10,
  },
  dateTextContainer:{
    position: 'absolute', 
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection:"column", 
    gap:5,
   
  },
  dateText:{
    fontSize:SIZES.medium,
    color:COLORS.secondary
  },
  dateList:{
    flexDirection: 'row',
    overflowX: 'scroll',
  },
  modeOfTherapy:{
    width: 30,
    height: 30,
    resizeMode:"contain"
  },
  containermodeOfTherapy:{
    flex: 1,
    flexDirection:"row",
    gap:20,
    justifyContent: 'center',
  },
  bookAppButton:{
    resizeMode:"contain",
    alignSelf: 'center',
    marginVertical:20,
  }
});
export default styles;
