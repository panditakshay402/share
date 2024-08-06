import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Inputtext from "../../components/form/inputtext";
import SubmitButton from "./submitButton";

const Register = () => {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Function
  const handleSubmit = () => {
    setLoading(true);
    try {
      if (!name || !email || !password) {
        Alert.alert("Please fill all the fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log("register data ==>", { name, email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Register</Text>
      <View style={styles.container2}>
        <Inputtext inputTitle={"Name"} value={name} setValue={setName} />

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
        btnTitle={"Register"}
        loading={loading}
        handleSubmit={handleSubmit}
      />

      <Text style={styles.linkText}>
        Already have an account? <Text style={styles.link}>Login</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "50%",
    // justifyContent:'center',
  },

  container2: {
    marginTop: "10%",
  },

  textBold: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
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

export default Register;
