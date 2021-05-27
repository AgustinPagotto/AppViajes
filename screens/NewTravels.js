import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const NewTravels = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Viajes a hacer</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return{
    headerTitle: "Nuevos Viajes"
  }
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
      fontFamily: 'open'
    }
})

export default NewTravels;
