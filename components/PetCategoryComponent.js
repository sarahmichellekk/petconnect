import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
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
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("PetInfo", { petId: item.id })}
          leftAvatar={{ source: require("./images/doug.jpg") }}
        />
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
