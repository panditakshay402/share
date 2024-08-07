import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HeaderMenu = () => {
  const {state} = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity>
        <FontAwesome5 name="home" style={styles.iconstyle} />
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

export default HeaderMenu;
