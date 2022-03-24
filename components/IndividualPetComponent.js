import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Card, Icon, ListItem } from "react-native-elements";
import { ANIMALS } from "../shared/animals";

function RenderIndividualPet(props) {
  const {animal} = props;
  const { navigate } = props;
  if (animal) {
    return (
      <View>
        <Card featuredTitle={animal.name} image={animal.image}>
            <Text style={{ margin: 20 }}>{animal.description}</Text>
            <Text style={{ margin: 20 }}>{`Adoption Agency: ${animal.agency}`}</Text>
            <View style={styles.cardRow}>
                <Icon
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() => props.favorite ? 
                            console.log('Already set as a favorite') : props.markFavorite()}
                    />
                <Icon
                    name='calendar'
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => navigate('Schedule')}
                />
            </View>
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
    const { navigate } = this.props.navigation;
  


    return (
  
       <RenderIndividualPet 
            animal={animal}
            favorite={this.state.favorite}
            markFavorite={() => this.markFavorite()}
            navigate = {navigate}
        />
       
    );
  }
}
const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 30
    },
});

export default IndividualPetInfo;