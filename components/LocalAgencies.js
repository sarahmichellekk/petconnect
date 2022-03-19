import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ListItem } from "react-native-elements";
import { AGENCIES } from "../shared/agencies";

class Agencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencies: AGENCIES,
    };
  }

  static NavigationOptions = {
    title: "Local Agencies",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderLocalAgencies = ({ item }) => {
      return (
        <ListItem
          style={styles.listItem}
          title={item.name}
          onPress={() => Linking.openURL(`${item.url}`)}
        />
      );
    };
    const maxfundRegion = {
      latitude: 39.73229,
      longitude: -104.99659,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    const dumbFriendsLeagueRegion = {
      latitude: 39.67902,
      longitude: -104.90254,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    const rockyMountainFelineRescueLeagueRegion = {
      latitude: 39.67325,
      longitude: -104.99198,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    const denverAnimalShelterRegion = {
      latitude: 39.71556,
      longitude: -105.00346,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    return (
      <View>
        <Text>Check Out Your Local Pet Adoption Agencies!</Text>
        <FlatList
          style={{ marginBottom: 20 }}
          data={this.state.agencies}
          renderItem={renderLocalAgencies}
          keyExtractor={(item) => item.id.toString()}
        />

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 39.7,
            longitude: -104.95,
            latitudeDelta: 0.04987,
            longitudeDelta: 0.15,
          }}
          showsUserLocation>
          <Marker coordinate={maxfundRegion} />
          <Marker coordinate={dumbFriendsLeagueRegion} />
          <Marker coordinate={rockyMountainFelineRescueLeagueRegion} />
          <Marker coordinate={denverAnimalShelterRegion} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "60%",
  },
  listItem: {
    margin: 20,
    borderColor: "black",
    backgroundColor: "#FF4500",
  },
});

export default Agencies;
