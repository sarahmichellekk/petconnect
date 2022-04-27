import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";
import { ListItem, Tile } from "react-native-elements";
import { connect } from 'react-redux';
import { baseUrl } from '../baseUrl';
import { SwipeRow } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteFavorite } from '../redux/ActionCreators';
import { ANIMALS } from '../shared/animals';

//read data from state
const mapStateToProps = state => {
  return {
      favorites: state.favorites
  };
};

const mapDispatchToProps = {
  deleteFavorite: animalId => deleteFavorite(animalId)
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
          <SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
            
              <View style={styles.deleteView}>
                  <TouchableOpacity
                      style={styles.deleteTouchable}
                      onPress={() =>
                          Alert.alert(
                              'Delete Favorite?',
                              'Are you sure you wish to delete the favorite pet : ' +
                                  item.name +
                                  '?',
                              [
                                  {
                                      text: 'Cancel',
                                      onPress: () => console.log(item.name + 'Not Deleted'),
                                      style: 'cancel'
                                  },
                                  {
                                      text: 'OK',
                                      onPress: () => this.props.deleteFavorite(item.id)
                                  },
                              ],
                              { cancelable: false }
                          )
                      }
                  >
                        <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
            <ListItem
                title={item.name}
                leftAvatar={{ source: item.image }}
                onPress={() => navigate('IndividualPetInfo', {animalId: item.id})}
            />
          
          </SwipeRow>
            
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
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);