import React, { Component } from "react";
import {
  FlatList,
  View,
  ScrollView,
  Image,
  Text,
  CardTitle,
  StyleSheet,
} from "react-native";
import { ListItem, Card, Tile } from "react-native-elements";
import { CATEGORIES } from "../shared/categories";

class PetCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES,
    };
  }

  static NavigationOptions = {
    title: "Available Pets",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderPetInfoItem = ({ item }) => {
      return (
        <ScrollView>
          <Tile
            onPress={() => navigate("PetInfo", { petId: item.id })}
            title={item.name}
            caption={item.description}
            imageSrc={{ uri: item.image }}
            featured
          />
        </ScrollView>
      );
    };

    return (
      <FlatList
        data={this.state.categories}
        renderItem={renderPetInfoItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default PetCategory;
