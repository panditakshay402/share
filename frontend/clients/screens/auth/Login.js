import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Inputtext from "../../components/form/inputtext";
import SubmitButton from "./submitButton";

const Login = ({ navigation }) => {
  // Global state
  const { state, setState } = useContext(AuthContext);

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        Alert.alert("Please fill all the fields");
        setLoading(false);
        return;
      }

      const { data } = await axios.post(
        "/auth/login",
        { email, password }
      );
      setState(data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      alert(data && data.message);
      navigation.navigate("Home");

      console.log("Login data ==>", { email, password });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else if (error.message) {
        alert(error.message); 
      } else {
        alert("An unexpected error occurred");
      }
      console.error("Error details:", error); 
    } finally {
      setLoading(false);
    }
  };

  // Temp function to check local storage
  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("Local storage data ==>", data);
  };
  getLocalStorageData();

  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Login</Text>
      <View style={styles.container2}>
        <Inputtext
          inputTitle={"Email"}
          keyboardType={"email-address"}
          autoComplete={"email"}
          value={email}
          setValue={setEmail}
        />

        <Inputtext
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete={"password"}
          value={password}
          setValue={setPassword}
        />
      </View>

      <SubmitButton
        btnTitle={"Login"}
        loading={loading}
        handleSubmit={handleSubmit}
      />

      <Text style={styles.linkText}>
        Not a User?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  container2: {
    marginTop: "10%",
  },

  textBold: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "50%",
  },
  linkText: {
    color: "#000",
    fontSize: 14,
    marginTop: "3%",
  },
  link: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default Login;
