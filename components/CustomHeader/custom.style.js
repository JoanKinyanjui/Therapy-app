import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    height: 60,
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "medium",
    fontFamily: "System",
  },
  accountStyle: {
    width: 43,
    height: 43,
    objectFit:"contain",
    borderWidth: 3,
    borderColor: COLORS.primary,
    resizeMode: "cover",
    borderRadius: 50,
  },
});

export default styles;
