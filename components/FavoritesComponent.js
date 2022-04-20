import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
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
                leftAvatar={{ source: item.image }}
                onPress={() => navigate('IndividualPetInfo', {animalId: item.id})}
            />
        );
    };

    return (
      <View>
      <View style={styles.header}>
        <Text style={styles.name}>My Favorite Pets</Text>
      </View>
      <FlatList
          data={this.state.animals.filter(
              animal => this.props.favorites.includes(animal.id)
          )}
          renderItem={renderFavoriteItem}
          keyExtractor={item => item.id.toString()}
      />
       
    </View>
      
  );
}
}

const styles = StyleSheet.create({
  deleteView: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: 1
  },
  deleteTouchable: {
      backgroundColor: 'red',
      height: '85%',
      justifyContent: 'center'
  },
  deleteText: {
      color: 'white',
      fontWeight: '700',
      textAlign: 'center',
      fontSize: 16,
      width: 100
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  header: {
      backgroundColor: "#A69685",
      alignItems: "center",
      justifyContent: "center",
      padding: 30,
  }, 
});

//connect component to redux
export default connect(mapStateToProps)(Favorites);