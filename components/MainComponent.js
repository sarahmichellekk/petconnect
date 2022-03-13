import React, { Component } from "react";
import Home from "./HomeComponent";
import Schedule from "./ScheduleComponent";
import PetCategory from "./PetCategoryComponent";
import PetInfo from "./PetInfoComponent";
import Community from "./CommunityForumComponent";
import IndividualPetInfo from "./IndividualPetComponent";
import { View, Platform, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const PetCategoryNavigator = createStackNavigator(
  {
    PetCategory: { screen: PetCategory },
    PetInfo: { screen: PetInfo },
    IndividualPetInfo: { screen: IndividualPetInfo },
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
    Home: { screen: Home },
  },
  {
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

const ScheduleNavigator = createStackNavigator(
  {
    Home: { screen: Schedule },
  },
  {
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

const CommunityNavigator = createStackNavigator(
  {
    Home: { screen: Community },
  },
  {
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

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name='home' type='font-awesome' size={24} color={tintColor} />
        ),
      },
    },

    PetCategories: {
      screen: PetCategoryNavigator,
      navigationOptions: {
        drawerLabel: "Available Pets",
        drawerIcon: ({ tintColor }) => (
          <Icon name='list' type='font-awesome' size={24} color={tintColor} />
        ),
      },
    },
    ScheduleVisit: {
      screen: ScheduleNavigator,
      navigationOptions: {
        drawerLabel: "Schedule a Visit",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='calendar'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        ),
      },
    },

    CommunityForum: {
      screen: CommunityNavigator,
      navigationOptions: {
        drawerLabel: "Community Forum",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: "#5A5F72",
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
