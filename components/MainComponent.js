import React, { Component } from "react";
import PlantCare from "./PlantCareComponent";
import { CATEGORIES } from "../shared/categories";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES,
    };
  }

  render() {
    return <PlantCare categories={this.state.categories} />;
  }
}

export default Main;
