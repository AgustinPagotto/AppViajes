import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import TravelItem from "../components/TravelItem";
import Colors from "../constants/Colors";

const UserPlaces = (props) => {
  return (
    <View style={styles.screen}>
      <TravelItem />
      <TravelItem />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Tus Viajes",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
  },
});

export default UserPlaces;
