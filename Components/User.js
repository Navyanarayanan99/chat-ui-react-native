import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const User = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={item.image} style={styles.profilePic} />
        <Image source={item.activeIcon} style={styles.activeIcon} />
      </View>
      <View>
        <Text style={styles.userName}>{item.username}</Text>
        <Text style={styles.messageContainer}> {item.message}</Text>
      </View>
    </View>
  );
};

export default User;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  profilePic: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginHorizontal: 20,
    marginVertical: 7,
    borderWidth: 3.5,
    borderColor: "#f0f0f0",
  },
  activeIcon: {
    width: 15,
    height: 15,
    borderRadius: 120,
    display: "flex",
    marginLeft: 75,
    marginHorizontal: 10,
    marginTop: -30,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    color: "#4a4a4a",
    marginTop: 20,
    fontWeight: "bold",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
  },
  messageContainer: {
    color: "#7b7b7b",
  },
});
