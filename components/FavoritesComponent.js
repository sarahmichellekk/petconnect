import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from 'react-redux';
import { baseUrl } from '../baseUrl';
import { ANIMALS } from '../shared/animals';

//read data from state
const mapStateToProps = state => {
  return {
      favorites: state.favorites
  };
};

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ANIMALS
    };
  }

  static NavigationOptions = {
    title: "Favorites",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderFavoriteItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: {uri: baseUrl + item.image}}}
                onPress={() => navigate('IndividualPetInfo', {animalId: item.id})}
            />
        );
    };

    return (
      <FlatList
          data={this.state.animals.filter(
              animal => this.props.favorites.includes(animal.id)
          )}
          renderItem={renderFavoriteItem}
          keyExtractor={item => item.id.toString()}
      />
  );
}
}

//connect component to redux
export default connect(mapStateToProps)(Favorites);