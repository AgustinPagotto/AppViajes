import React from 'react';
import { ScrollView, Text, StyleSheet, Image} from 'react-native';

const TravelDetails = (props) =>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
            
            <View><Text>San Juan</Text></View>
            <Image/>
            <Image/>
            <Image/>
            <Text>MAPAAAAA</Text>
        </ScrollView>
    )
}

export const screenOptions = navData => {
    return{
      headerTitle: "San Juan"
    }
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    }
})

export default TravelDetails;