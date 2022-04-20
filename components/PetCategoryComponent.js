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
            imageSrc={item.image}
            featured
            key={item}
          />
        </ScrollView>
      );
    };

    return (
      <View>
      <View style={styles.header}>
        <Text style={styles.name}>Available Pets!</Text>
      </View>
      <FlatList
        data={this.state.categories}
        renderItem={renderPetInfoItem}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  header: {
      backgroundColor: "#A69685",
      alignItems: "center",
      justifyContent: "center",
      padding: 30,
  }, 
});

export default PetCategory;
