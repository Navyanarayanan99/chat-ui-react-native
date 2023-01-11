import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import User from "../Components/User";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Data = [
  {
    id: 1,
    image: require("../assets/joe.png"),
    username: "Joe Belfiore",
    message: "In a world far away",
    activeIcon: require("../assets/ActiveIcons/green.png"),
  },
  {
    id: 2,
    image: require("../assets/bill.jpg"),
    username: "Bill Gates",
    message: "What I am doing here?",
    activeIcon: require("../assets/ActiveIcons/green.png"),
  },
  {
    id: 3,
    image: require("../assets/mark.png"),
    username: "Mark Zuckerberg",
    message: "Really Buzy, Whatsapp only",
    activeIcon: require("../assets/ActiveIcons/yellow.png"),
  },
  {
    id: 4,
    image: require("../assets/marissa.png"),
    username: "Marissa Mayer",
    message: "In a rush to catch a plane",
    activeIcon: require("../assets/ActiveIcons/red.png"),
  },
  {
    id: 5,
    image: require("../assets/sundar.png"),
    username: "Sundar Pichai",
    message: "Do androids dream of electric sheep?",
    activeIcon: require("../assets/ActiveIcons/green.png"),
  },
  {
    id: 6,
    image: require("../assets/jeff.png"),
    username: "Jeff Bezos",
    message: "Counting Zeroes: Prime time",
    activeIcon: require("../assets/ActiveIcons/yellow.png"),
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={User}
      />
      <View style={styles.circle}>
        <Icon name="pencil" size={30} color="#bcbcbc" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  userstyle: {
    height: 5,
    backgroundColor: "#fff",
    width: "100%",
  },
  circle: {
    width: 68,
    height: 68,
    borderRadius: 150 / 2,
    shadowColor: "grey",
    backgroundColor: "#fff",
    elevation: 15,
    position: "absolute",
    bottom: 50,
    right: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
