import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome5 name="home" style={styles.iconstyle} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="plus-square" style={styles.iconstyle} />

        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="info-circle" style={styles.iconstyle} />

        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="user" style={styles.iconstyle} />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  iconstyle: {
    color: "black",
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 3,
  },
});
export default FooterMenu;
