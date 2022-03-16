import React, { Component } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Card, Tile } from "react-native-elements";
import { ANIMALS } from "../shared/animals";

//Gotta figure out how to get images dynamically!!

function RenderItem({ items }) {
  return items.map((item) => {
    if (item) {
      return (
        <View>
          <Card featuredTitle={item.name} image={item.image}>
            <Text style={{ margin: 10 }}>{item.name}</Text>
            <Text style={{ margin: 10 }}>{`Agency: ${item.agency}`}</Text>
            <Text style={{ margin: 10 }}>{item.description}</Text>
          </Card>
        </View>
      );
    }
    return <View />;
  });
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ANIMALS,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.text}>Adopt Today!</Text>
        <Tile
          title={"Search local agencies"}
          imageSrc={require("./images/takemehome.jpg")}
          style={styles.tile}></Tile>

        <Tile
          title={"Schedule a visit"}
          imageSrc={require("./images/highfive.jpg")}
          style={styles.tile}></Tile>

        <Tile
          title={"Find your new best friend"}
          imageSrc={require("./images/bestfriend.jpg")}
          style={styles.tile}></Tile>

        <Text style={styles.text}>Featured New Pets!</Text>
        <RenderItem
          items={this.state.animals.filter((animal) => animal.featured)}
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
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 30,
    display: "flex",
    justifyContent: "center",
  },
  tile: {
    paddingTop: 50,
    alignItems: "center",
    flex: 1,
  },
});

export default Home;
