import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "screenHeight",
    fontFamily: "System",
    marginTop: 15,
  },
  TabPanelDiv: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 30,
    marginHorizontal: 30,
  },
  TabPanel: {
    flex: 1,
  },
  TabPanel1: {
    flex: 1,
  },
  TabPanelBorder: {
    width: "100%",
    flex: 1,
    borderRadius: 30,
    alignSelf: "center",
  },
  sheduleHeading: {
    fontSize: 14,
    color: COLORS.uni,
    fontWeight: "500",
    alignSelf: "center",
    marginVertical: 15,
    paddingHorizontal: 5,
  },
  appointmentCard: {
    width: 300,
    height: 130,
    backgroundColor: "gainsboro",
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  pastAppointmentCard: {
    width: 300,
    height: 180,
    backgroundColor: "gainsboro",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 8,
  },
  partOneDiv: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  itemOne: {
    flex: 2,
  },
  itemTwo: {
    flex: 4,
    flexDirection: "column",
    fontSize: SIZES.small,
    gap: 5,
  },
  itemThree: {
    flex: 1,
  },
  notify: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 55,
  },
  partTwoDiv: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  dateandTime: {
    color: COLORS.secondary,
    fontSize: SIZES.small,
    fontWeight: 'bold',
    paddingVertical: 5,
    marginLeft:5,
  },
  partThreeDiv: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
  },
  DateDiv: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:5,
    marginTop:5,
  },
  timeIcons: {
    width: 15,
    height: 15,
  },
  dateText: {
    fontSize: SIZES.small,
    color: COLORS.uni,
    marginHorizontal:5
  },
  starsDiv: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
  },
  starsInAppointment: {
    width: 12,
    height: 12,
  },
  partThreeDivTwo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical:5,
  },
 
  JoinButtonDiv: {
    flex: 1, 
    borderColor: COLORS.tertiary,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:5,
    paddingHorizontal: 10,
  },
  JoinButtonDivSpecial: {
    backgroundColor:"black",
    flex: 1, 
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:5,
    paddingHorizontal: 10,
  },
  buttonTextSpecial: {
    fontSize:12,
    color:"white",
   },
  buttonText: {
   fontSize:12,
  },
});

export default styles;
