import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { CATEGORIES } from "../shared/categories";

function RenderPetInfo({ category }) {
  if (category) {
    return (
      <Card featuredTitle={category.name} image={require("./images/lucy.jpg")}>
        <Text style={{ margin: 10 }}>{category.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class PetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES,
    };
  }

  static NavigationOptions = {
    title: "Pet Information",
  };

  render() {
    const petId = this.props.navigation.getParam("petId");
    const category = this.state.categories.filter(
      (category) => category.id === petId
    )[0];
    return <RenderPetInfo category={category} />;
  }
}

export default PetInfo;
