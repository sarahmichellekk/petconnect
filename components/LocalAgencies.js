import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
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
          title={item.name}
          //onPress=
        />
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
            data={this.state.agencies}
            renderItem={renderLocalAgencies}
            keyExtractor={(item) => item.id.toString()}
        />
        <View >
            <MapView 
                style={{ flex: 1 }}
                
                showsUserLocation />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  });

export default Agencies;