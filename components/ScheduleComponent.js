import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Picker,
  Switch,
  Button,
  Alert,
} from "react-native";
import { Card } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

import { ANIMALS } from "../shared/animals";

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visitors: 1,
      date: new Date(),
      showCalendar: false,
      petName: "Select",
      agencyName: "Select",
    };
  }

  static navigationOptions = {
    title: "Schedule Visit",
  };

  resetForm() {
    this.setState({
      visitors: 1,
      date: new Date(),
      showCalendar: false,
      petName: "Select",
      agencyName: "Select",
    });
  };

  render() {
    const petOptions = () => {
      console.log(ANIMALS)
      return ANIMALS.map((item) => {
        return <Picker.Item label={item.name} value={item.name} />;
      });
    };


    //trying to filter out repeated agency names in two functions below:


    // function removeDuplicates(originalArray, objKey) {
    //   var trimmedArray = [];
    //   var values = [];
    //   var value;
    
    //   for(var i = 0; i < originalArray.length; i++) {
    //     value = originalArray[i][objKey];
    
    //     if(values.indexOf(value) === -1) {
    //       trimmedArray.push(originalArray[i]);
    //       values.push(value);
    //     }
    //   }
    
    //   return trimmedArray;
    
    // }

    // const removedDuplicates = removeDuplicates(ANIMALS, 'agency');
    const filteredByAgency = ANIMALS.reduce((acc, current) => {
      const x = acc.find(item => item.agency === current.agency);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
  
    const agencyOptions = () => {
      console.log(filteredByAgency);
        filteredByAgency.map((item) => {
          return <Picker.Item label={item.agency} value={item.agency} />;
        });
    };

    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.name}>Schedule a Visit!</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of Visitors</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.visitors}
            onValueChange={(itemValue) =>
              this.setState({ visitors: itemValue })
            }>
            <Picker.Item label='1' value='1' />
            <Picker.Item label='2' value='2' />
            <Picker.Item label='3' value='3' />
            <Picker.Item label='4' value='4' />
            <Picker.Item label='5' value='5' />
            <Picker.Item label='6' value='6' />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Name of Pet</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.petName}
            onValueChange={(itemValue) =>
              this.setState({ petName: itemValue })
            }>
            {petOptions()}
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Name of Agency</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.agencyName}
            onValueChange={(itemValue) =>
              this.setState({ agencyName: itemValue })
            }>
            {agencyOptions()}
          </Picker>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date</Text>
          <Button
            onPress={() =>
              this.setState({ showCalendar: !this.state.showCalendar })
            }
            title={this.state.date.toLocaleDateString("en-US")}
            color='#FF4500'
            accessibilityLabel='Tap me to select a reservation date'
          />
        </View>
        {this.state.showCalendar && (
          <DateTimePicker
            value={this.state.date}
            mode={"date"}
            display='default'
            onChange={(event, selectedDate) => {
              selectedDate &&
                this.setState({ date: selectedDate, showCalendar: false });
            }}
            style={styles.formItem}
          />
        )}
        <View style={styles.formRow}>
          <Button
            onPress={() =>
              Alert.alert(
                "Schedule Visit?",
                "Number of Visitors: " +
                  this.state.visitors +
                  "\n" +
                  "Name of Pet? " +
                  this.state.petName +
                  "\n" +
                  "Date: " +
                  this.state.date.toLocaleDateString("en-US"),
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                    onPress: () => this.resetForm(),
                  },
                  {
                    text: "OK",
                    onPress: () => this.resetForm(),
                  },
                ]
              )
            }
            title='Search'
            color='#5637DD'
            accessibilityLabel='Tap me to search for available campsites to reserve'
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0,
  },
  formLabel: {
    fontSize: 25,
    flex: 2,
  },
  formItem: {
    flex: 2,
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

export default Schedule;
