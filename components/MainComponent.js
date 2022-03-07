import React, { Component } from "react";
import PetCategory from "./PetCategoryComponent";
import { CATEGORIES } from "../shared/categories";
import PetInfo from "./PetInfoComponent";
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
        <PetCategory
          categories={this.state.categories}
          onPress={(categoryId) => this.onCategorySelect(categoryId)}
        />
        <PetInfo
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
