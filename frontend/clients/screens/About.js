import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/Menus/FooterMenu";

const About = () => {
    return (
        <View style={styles.container}>
          <FooterMenu />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "space-between",
      },
    });

export default About