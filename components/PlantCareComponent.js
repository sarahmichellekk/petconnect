import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function PlantCare(props) {
  const renderPlantCareItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require("./images/pothos.jpg") }}
      />
    );
  };

  return (
    <FlatList
      data={props.categories}
      renderItem={renderPlantCareItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default PlantCare;
