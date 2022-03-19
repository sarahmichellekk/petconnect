import React, { Component } from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { CATEGORIES } from "../shared/categories";
import { ANIMALS } from "../shared/animals";

function RenderPetInfo(props) {
  const { category } = props;
  if (category) {
    return (
      <View>
        <Card
          featuredTitle={category.name}
          image={require("./images/takemehome.jpg")}>
          <Text style={{ margin: 10 }}>{category.description}</Text>
        </Card>
      </View>
    );
  }
  return <View />;
}

class PetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES,
      animals: ANIMALS,
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
    const petType = this.state.animals.filter(
      (animal) => animal.type === category.name
    );

    const { navigate } = this.props.navigation;
    const renderPetInfoCard = ({ item }) => {
      return (
        <View>
          <ListItem
            title={item.name}
            onPress={() => navigate("IndividualPetInfo", { animalId: item.id })}
            leftAvatar={{ source: require("./images/patricia.jpg") }}
          />
        </View>
      );
    };

    return (
      <View>
        <RenderPetInfo category={category} />
        <FlatList
          data={petType}
          renderItem={renderPetInfoCard}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    width: "100%",
    backgroundColor: "#000",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});

export default PetInfo;

// optional function for renderItem in flatlist: {({item}) => <Image source={item.image} onPress= {() => navigate("IndividualPetInfo", { animalId: item.id })} />}

//an attempt at a FlatList that can display individual pictures
{
  /* <FlatList
    data={petType}
    style={styles.list}
    renderItem={({ item }) => (
      <Image
        source={`url: ${item.image}`}
        containerStyle={styles.item}
        onPress= {() => navigate("IndividualPetInfo", { animalId: item.id })}/>
        )}
    keyExtractor={(item) => item.id.toString()}
    /> */
}
