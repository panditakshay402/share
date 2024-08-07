import axios from "axios";

import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Inputtext from "../../components/form/inputtext";
import SubmitButton from "./submitButton";

const Login = ({ navigation }) => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    try {
      if (!email || !password) {
        Alert.alert("Please fill all the fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = axios.post(
        "http://192.168.0.103:8080/api/v1/auth/login",
        { email, password }
      );
      alert(data && data.message);
      console.log("register data ==>", { email, password });

      console.log("Login data ==>", { email, password });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else if (error.message) {
        alert(error.message); 
      } else {
        alert("An unexpected error occurred");
      }
      console.error("Error details:", error); 
    }
  };

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
      {/* <Text>{JSON.stringify({name,email,password},null,4)}</Text> */}

      <SubmitButton
        btnTitle={"Login"}
        loading={loading}
        handleSubmit={handleSubmit}
      />

      <Text style={styles.linkText}>
        Not a User ?{" "}
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
    // justifyContent:'center',
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
