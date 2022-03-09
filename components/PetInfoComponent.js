import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../shared/categories";
import { DOGS } from "../shared/dogs";

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

// function RenderDogs({dog}) {
//   if(dog) {
//     return (
//       <Card
//         featuredTitle={dog.name}
//         image={require{dog.name}}>
//       </Card>
//     );
//   }
// }

class PetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES,
      dogs: DOGS
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
    const dog = this.state.dogs.filter((dog) => dog.id === petId[0]);
    return (
   <View>
       <RenderPetInfo category={category} />
        {/* <RenderDogs dog={dog} /> */}
   </View>
    
    );
  }
}

export default PetInfo;
