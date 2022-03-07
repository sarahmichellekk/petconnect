import React, { Component } from "react";
import PetCategory from "./PetCategoryComponent";
import PetInfo from "./PetInfoComponent";
import { View, Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const PetCategoryNavigator = createStackNavigator(
  {
    PetCategory: { screen: PetCategory },
    PetInfo: { screen: PetInfo },
  },
  {
    initialRouteName: "PetCategory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FF4500",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AppNavigator = createAppContainer(PetCategoryNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}>
        <AppNavigator />
      </View>
    );
  }
}

export default Main;
