import { UserInterfaceIdiom } from "expo-constants";
import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native";
import { ListItem, Card, Icon, Avatar } from "react-native-elements";
import { FORUMS } from "../shared/forums";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forums: FORUMS,
    };
  }

  static NavigationOptions = {
    title: "Community Forum",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderForumPosts = ({ item }) => {
      return (
        <ScrollView style={styles.container}>
          <Card style={styles.cardRow}>
            <View>
              <Text style={{ fontSize: 20 }}>{`Subject: ${item.title}`}</Text>
            </View>
            <ListItem
              // leftAvatar={require("./images/gracie.jpg")}
              title={item.author}
              subtitle={item.question}
              onPress={() => navigate("ForumPost", { forumPost: item.id })}
            />
            <View style={styles.forumBox}>
              <Icon raised name='bookmark' type='font-awesome' color='orange' />

              <Icon
                raised
                name='comment'
                type='font-awesome'
                color='lightblue'
              />
              <Text
                style={{
                  fontSize: 18,
                }}>{`Replies: ${item.replies}`}</Text>
            </View>
          </Card>
        </ScrollView>
      );
    };

    return (
      <View style={{ backgroundColor: "#FF4500" }}>
        <Card style={{ margin: 0 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Forums/Location/Denver-Boulder
          </Text>
        </Card>
        <FlatList
          data={this.state.forums}
          renderItem={renderForumPosts}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EE",
  },
  cardRow: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  forumBox: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Community;
