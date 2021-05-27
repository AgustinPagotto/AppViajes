import React from "react";
import { View, Text, Image, StyleSheet, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const TravelItem = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/prueba.jpg")} style={styles.image} />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.location}>San Luis, Argentina</Text>
          <Text style={styles.date}>Visitado el xx/xx/xxxx</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="md-bus" size={20} color="#61625d" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "95%",
    height: 200,
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    marginVertical: 5,
    padding: 6,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  informationContainer: {
    flexDirection: "row",
  },
  textContainer: {
    height: "100%",
    width: "80%",
    marginLeft: 5,
  },
  location: {
    fontFamily: "open",
  },
  date: {
    fontFamily: "open-italic",
  },
  iconContainer: {
    height: "100%",
    width: "20%",
    flexDirection: "row-reverse",
    paddingLeft: 7,
    alignItems: "center",
  },
});

export default TravelItem;
