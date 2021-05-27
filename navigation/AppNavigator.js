import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TravelsNavigator } from "./TravelNavigator";

const AppNavigator = (props) =>{
    return (
        <NavigationContainer>
            <TravelsNavigator/>
        </NavigationContainer>
    )
}

export default AppNavigator;