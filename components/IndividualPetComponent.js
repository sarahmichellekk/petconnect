import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Card, Icon, ListItem } from "react-native-elements";
import { ANIMALS } from "../shared/animals";

function RenderIndividualPet(props) {
  const {animal} = props;
  if (animal) {
    return (
      <View>
        <Card featuredTitle={animal.name} image={animal.image}>
            <Text style={{ margin: 20 }}>{animal.description}</Text>
            <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
        </Card>
      </View>
    );
  }
  return <View />;
}


class IndividualPetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ANIMALS,
      favorite: false
    };
  }

  markFavorite() {
    this.setState({favorite: true});
}

  static NavigationOptions = {
    title: "Pet Information",
  };


  render() {
    const animalId = this.props.navigation.getParam("animalId");
    const animal = this.state.animals.filter(
      (animal) => animal.id === animalId
    )[0];
  


    return (
  
       <RenderIndividualPet 
            animal={animal}
            favorite={this.state.favorite}
            markFavorite={() => this.markFavorite()}
        />
       
    );
  }
}

export default IndividualPetInfo;