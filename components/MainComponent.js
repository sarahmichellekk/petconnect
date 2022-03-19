import React, { Component } from "react";
import Home from "./HomeComponent";
import Schedule from "./ScheduleComponent";
import PetCategory from "./PetCategoryComponent";
import PetInfo from "./PetInfoComponent";
import Community from "./CommunityForumComponent";
import IndividualPetInfo from "./IndividualPetComponent";
import Favorites from "./FavoritesComponent";
import Agencies from "./LocalAgencies";
import { View, Platform, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const PetCategoryNavigator = createStackNavigator(
  {
    PetCategory: {
      screen: PetCategory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name='list'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    PetInfo: { screen: PetInfo },
    IndividualPetInfo: { screen: IndividualPetInfo },
    Schedule: { screen: Schedule },
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
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#FF4500",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name='home'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ScheduleNavigator = createStackNavigator(
  {
    Home: { screen: Schedule },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#FF4500",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name='calendar'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Home: { screen: Favorites },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#FF4500",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name='heart'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const LocalAgenciesNavigator = createStackNavigator(
  {
    Home: { screen: Agencies },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#FF4500",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name='map'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CommunityNavigator = createStackNavigator(
  {
    Home: { screen: Community },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#FF4500",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name='info-circle'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
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

    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        drawerLabel: "Favorites",
        drawerIcon: ({ tintColor }) => (
          <Icon name='heart' type='font-awesome' size={24} color={tintColor} />
        ),
      },
    },

    Agencies: {
      screen: LocalAgenciesNavigator,
      navigationOptions: {
        drawerLabel: "Agencies",
        drawerIcon: ({ tintColor }) => (
          <Icon name='map' type='font-awesome' size={24} color={tintColor} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#FF4500",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },

  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
