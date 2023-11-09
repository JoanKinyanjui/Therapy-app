import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "screenHeight",
    flex: 1,
  },
  containerOne: {
    fontFamily: "System",
  },
  topContainer: {
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 20,
  },
  paraOne: {
    fontSize: 15,
    color: COLORS.secondary,
    alignSelf: "center",
    marginVertical: 5,
  },
  paraTwo: {
    fontSize: 17,
    fontFamily: "System",
    fontWeight: "bold",
    color: COLORS.primary,
    alignSelf: "center",
    marginVertical: 5,
  },
  paraThree: {
    fontSize: SIZES.small,
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
    borderRadius: 5,
    position: "relative !important",
    overflow: "hidden",
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
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
  },
  gridItem: {
    width: 250,
    height: 110,
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute !important",
    bottom: 0,
  },

  wording: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  word1: {
    fontSize: SIZES.medium,
    color: "white",
    // fontWeight: 700,
    paddingBottom: 2,
    textAlign: "left",
  },
  word2: {
    width: "100%",
    fontSize: SIZES.small,
    color: COLORS.tertiary,
    // fontWeight: 300,
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
    borderTopRightRadius:3,
    borderBottomRightRadius:3,
  },
  filterIcon: {
    alignSelf: "center",
    width: 40,
    height: 30,
  },
  textHeading: {
    color: COLORS.tertiary,
    fontSize: SIZES.medium,
    alignSelf: "center",
    marginVertical: 20,
  },
  card: {
    margin: 10,
    width: "45%",
    height: 250,
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  gradientMatch: {
    flex: 1,
    justifyContent: "space-between",
    // padding: 10,
    flexDirection: "row",
  },
  content: {
    width: "100%",
    paddingHorizontal: 4,
    position: "absolute",
    bottom: 3,
    left: 0,
    right: 0,
  },
  name: {
    fontSize: SIZES.xSmall,
    fontFamily: "Helvetica-Bold",
    color: "white",
  },
  rating: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    alignItems: "center",
    gap: 4,
  },
  specializations: {
    fontSize: 9,
    color: COLORS.tertiary,
    fontStyle: "italic",
    marginTop: 5,
    // fontWeight: 100,
  },
  likeIconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 50,
    padding: 5,
    // zIndex: 1,
  },
  stars: {
    width: 12,
    height: 12,
  },
  moneyDiv: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moneyText: {
    flex: 1,
    // fontWeight: 500,
    width: "100%",
    backgroundColor: "rgba(100, 99, 99, 0.4);",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 20,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  moneyTextSpec: {
    fontSize: SIZES.tiny,
    color: COLORS.primary,
    paddingHorizontal: 4,
  },
  gridContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  // Book an Appointment

  therapistProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "gainsboro",
    borderWidth: 1,
    alignSelf: "center",
  },
  starsDiv: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  starsInAppointment: {
    width: 22,
    height: 22,
  },
  containerBook: {
    width: "100%",
    height: "screenHeight",
  },
  topTHerapistProfile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 20,
    borderBottomLeftRadius: 40,
    backgroundColor: "white",
    borderBottomRightRadius: 40,
  },
  profileparagraph: {
    fontSize: SIZES.small,
    // fontWeight: 100,
    color: COLORS.uni,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  specializationDiv: {
    fontSize: SIZES.small,
    color: COLORS.tertiary,
    textAlign: "center",
    fontStyle:"italic"
  },
  therapistName: {
    fontFamily: "Helvetica-Bold",
    fontSize: SIZES.small,
    alignSelf: "center",
  },
  appointmentDateHeading: {
    fontSize: SIZES.midLarge,
    color: COLORS.primary,
    marginTop: 30,
    alignSelf: "center",
  },
  category: {
    textAlign: "left",
    color: COLORS.secondary,
    fontSize: SIZES.medium,
    marginTop: 20,
    // fontFamily: "Poppins",
    marginLeft: 20,
  },
  bookAppointmentContainer: {
    marginTop: 10,
  },
  dates: {
    width: 70,
    height: 80,
    resizeMode: "contain",
  },
  times: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },

  modeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  dateTextContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 5,
  },
  dateText: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  dateList: {
    flexDirection: "row",
    overflowX: "scroll",
    marginTop: 10,
  },
  modeOfTherapy: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  modes: {
    width: 100,
    height: 50,
    resizeMode: "cover",
  },
  containermodeOfTherapy: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    paddingTop: 10,
  },
  bookAppButton: {
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 30,
  },
  selectedDate: {
    backgroundColor: "#7CB7FD",
    width: 55,
    height: 100,
    borderRadius: 26,
  },
  unselectedDate: {
    backgroundColor: "rgba(220, 220, 220, 0.7)",
    width: 55,
    borderRadius: 26,
    height: 100,
  },
  selectedTime: {
    backgroundColor: "#7CB7FD",
    width: 80,
    height: 30,
    borderRadius: 26,
  },
  unselectedTime: {
    backgroundColor: "rgba(220, 220, 220, 0.7)",
    width: 80,
    borderRadius: 26,
    height: 30,
  },
  selectedModes: {
    backgroundColor: "#7CB7FD",
    width: 80,
    height: 40,
    borderRadius: 10,
  },
  unselectedModes: {
    backgroundColor: "rgba(220, 220, 220, 0.7)",
    width: 80,
    borderRadius: 10,
    height: 40,
  },
  button: {
    width: 240,
    height: 43,
    color: "white",
    alignSelf: "center",
    marginTop: 50,
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
    backgroundColor: "#7CB7FD",
  },
  moneyTextBook: {
    width: "20%",
    backgroundColor: "rgba(100, 99, 99, 0.1);",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 20,
    borderRadius: 50,
    alignSelf:"center",
    marginTop:8,
  },
  moneyTextSpecBook: {
    fontSize: SIZES.xSmall,
    color: COLORS.primary,
    paddingHorizontal: 4,
  },
});
export default styles;
