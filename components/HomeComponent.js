import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { ANIMALS } from '../shared/animals';

//I tried to use map() in the function below to make a card displaying each of the "featured" pets but couldn't get it to work. I didn't spend too much time since I wasn't sure what all we wanted on there anyway

function RenderItem({item}) {
    console.log(item);
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/bestfriend.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.name}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: ANIMALS
        };
    }


    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
           <ScrollView>
               <RenderItem
                    item={this.state.animals.filter(animal => animal.featured)[0]}
               />
           </ScrollView>
        );
    }
}

export default Home;