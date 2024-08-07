import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderMenu = () => {
  const {sate,setState} = useContext(AuthContext);

//logout function
const handleLogout = async () => {
    setState({token:"", user: null});
    await AsyncStorage.removeItem("@auth");
    alert("Logout Successfully");
};

  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesome5 name="sign-out-alt" 
        color={'Red'}
        style={styles.iconstyle} />
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
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 3,
  },
});

export default HeaderMenu;
