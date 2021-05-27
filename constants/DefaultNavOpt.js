import Colors from "./Colors";

export default {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleStyle: {
    alignSelf: "center",
    fontFamily: "open"
  },
};
