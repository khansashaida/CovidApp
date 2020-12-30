import React from "react";
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
class Summary extends React.Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <div className="row">
        <View style={styles.container} className="TotalDeaths">
          <View
            style={{ flexDirection: "center", justifyContent: "space-between" }}
          >
            <Text style={styles.textcolor}> Deceased: </Text>
            <Text style={styles.textcolor}> {summary.TotalDeaths} </Text>
          </View>
        </View>

        <View style={styles.container} className="NewDeaths">
          <View
            style={{ flexDirection: "center", justifyContent: "space-between" }}
          >
            <Text style={styles.textcolor}> Recent Death Toll: </Text>
            <Text style={styles.textcolor}> {summary.NewDeaths} </Text>
          </View>
        </View>
        <View style={styles.container} className="TotalConfirmed">
          <View
            style={{ flexDirection: "center", justifyContent: "space-between" }}
          >
            <Text style={styles.textcolor}> Covid Positive: </Text>
            <Text style={styles.textcolor}> {summary.TotalConfirmed} </Text>
          </View>
        </View>

        <View style={styles.container} className="TotalRecovered">
          <View
            style={{ flexDirection: "center", justifyContent: "space-between" }}
          >
            <Text style={styles.textcolor}> Recovered: </Text>
            <Text style={styles.textcolor}> {summary.TotalRecovered} </Text>
          </View>
        </View>

        <View style={styles.container} className="Lastupdated">
          <Text style={styles.textcolor}> Last Updated </Text>
          <Text style={styles.textcolor}>
            {" "}
            {new Date(currentDate).toDateString()}{" "}
          </Text>
        </View>
      </div>
    );
  }
}

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#E9967A",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#8FBC8F",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textcolor: {
    color: "white",
    fontSize: 22,
    alignSelf: "center",
  },
  textcolor2: {
    color: "green",
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
});
