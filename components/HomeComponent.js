import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
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
               <Text style={styles.text}>Adopt Today!</Text>
               <Image
                    source={require('./images/takemehome.jpg')}
                    style={styles.card}
                />
                <Image
                    source={require('./images/highfive.jpg')}
                    style={styles.card}
                />
                <Image
                    source={require('./images/bestfriend.jpg')}
                    style={styles.card}
                />
                <Text style={styles.text}>Featured New Pets!</Text>
               <RenderItem
                    item={this.state.animals.filter(animal => animal.featured)[0]}
               />
           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    
    card: {
        paddingTop: 50,
        margin: 20,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        
    },
    text: {
        fontSize:30,
        display: "flex",
        justifyContent: "center"
    }
  });

export default Home;