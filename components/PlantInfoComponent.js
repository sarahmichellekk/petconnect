import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

function RenderPlantInfo({ category }) {
  if (category) {
    return (
      <Card
        featuredTitle={category.name}
        image={require("./images/pothos.jpg")}>
        <Text style={{ margin: 10 }}>{category.description}</Text>
      </Card>
    );
  }
  return <View />;
}

function PlantInfo(props) {
  return <RenderPlantInfo category={props.category} />;
}

export default PlantInfo;
