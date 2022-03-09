import React, { Component } from "react";
import Home from "./HomeComponent";
import PetCategory from "./PetCategoryComponent";
import PetInfo from "./PetInfoComponent";
import { View, Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
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

const HomeNavigator = createStackNavigator(
  {
      Home: { screen: Home }
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '##FF4500'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const MainNavigator = createDrawerNavigator(
  {
      Home: { screen: HomeNavigator },
      PetCategories: { screen: PetCategoryNavigator }
  },
  {
      drawerBackgroundColor: '#CEC8FF'
  }
);


const AppNavigator = createAppContainer(MainNavigator);

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
