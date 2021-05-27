import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import travelsReducer from "./store/travels-reducer";

const fetchFonts = () => {
  return Font.loadAsync({
    open: require("./assets/fonts/Open.ttf"),
    "open-bold": require("./assets/fonts/Open-Bold.ttf"),
    "open-italic": require("./assets/fonts/Open-Italic.ttf"),
  });
};

const rootReducer = combineReducers({
  travels: travelsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
