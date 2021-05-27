import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import UserTravels, {
  screenOptions as userOptions,
} from "../screens/UserTravels";
import NewTravels, {
  screenOptions as travelOptions,
} from "../screens/NewTravels";
import TravelDetail, {
  screenOptions as detailOptions,
} from "../screens/TravelDetail";

import defaultNavOptions from "../constants/DefaultNavOpt";
import Colors from "../constants/Colors";

const UserTravelsNavigator = createStackNavigator();

export const UserNavigator = () => {
  return (
    <UserTravelsNavigator.Navigator screenOptions={defaultNavOptions}>
      <UserTravelsNavigator.Screen
        name="UserTravels"
        component={UserTravels}
        options={userOptions}
      />
    </UserTravelsNavigator.Navigator>
  );
};

const NewTravelsNavigator = createStackNavigator();

export const NewNavigator = () => {
  return (
    <NewTravelsNavigator.Navigator screenOptions={defaultNavOptions}>
      <NewTravelsNavigator.Screen
        name="NewTravels"
        component={NewTravels}
        options={travelOptions}
      />
    </NewTravelsNavigator.Navigator>
  );
};

const TravelDetailNavigator = createStackNavigator();

export const DetailNavigator = () => {
  return (
    <TravelDetailNavigator.Navigator screenOptions={defaultNavOptions}>
      <TravelDetailNavigator.Screen
        name="TravelDetails"
        component={TravelDetail}
        options={detailOptions}
      />
    </TravelDetailNavigator.Navigator>
  );
};

const TravelsTabsNavigator = createBottomTabNavigator();

export const TravelsNavigator = () => {
  return (
    <TravelsTabsNavigator.Navigator
      tabBarOptions={{
        activeTintColor: Colors.backgroundDark,
        inactiveTintColor: "black",
        style: { backgroundColor: Colors.primary },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Tus Viajes") {
            iconName = "md-person";
          } else if (route.name === "Nuevos Viajes") {
            iconName = "md-paper-plane";
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <TravelsTabsNavigator.Screen
        name="Tus Viajes"
        component={UserNavigator}
      />
      <TravelsTabsNavigator.Screen
        name="Nuevos Viajes"
        component={NewNavigator}
      />
    </TravelsTabsNavigator.Navigator>
  );
};
