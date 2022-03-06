import React, { Component } from "react";
import PlantCare from "./PlantCareComponent";
import { CATEGORIES } from "../shared/categories";
import PlantInfo from "./PlantInfoComponent";
import { View } from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES,
      selectedCategory: null,
    };
  }

  onCategorySelect(categoryId) {
    this.setState({ selectedCategory: categoryId });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PlantCare
          categories={this.state.categories}
          onPress={(categoryId) => this.onCategorySelect(categoryId)}
        />
        <PlantInfo
          category={
            this.state.categories.filter(
              (category) => category.id === this.state.selectedCategory
            )[0]
          }
        />
      </View>
    );
  }
}

export default Main;
