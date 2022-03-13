import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
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
        <ListItem
          title={item.title}
          subtitle={item.author}
          description={item.question}
          onPress={() => navigate("ForumPost", { forumPost: item.id })}
        />
      );
    };

    return (
      <FlatList
        data={this.state.forums}
        renderItem={renderForumPosts}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Community;
