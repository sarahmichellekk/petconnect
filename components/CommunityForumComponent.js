import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native";
import { ListItem, Card, Icon } from "react-native-elements";
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
        <View>
          <View>
            <Card>
              <ListItem
                title={item.title}
                subtitle={item.author}
                description={item.question}
                onPress={() => navigate("ForumPost", { forumPost: item.id })}
              />
            </Card>
          </View>
        </View>
      );
    };

    return (
      <View>
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
  },
  cardRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
});

export default Community;
