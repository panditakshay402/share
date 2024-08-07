import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Inputtext from "../../components/form/inputtext";
import SubmitButton from "./submitButton";
import axios from "axios";
const Register = ({navigation}) => {
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
      const {data} =  axios.post('http://192.168.0.103:8080/api/v1/auth/register',{name,email,password});
      alert('Registration successful');
      console.log("register data ==>", { name, email, password });
    } catch (error) {
      alert(error.response.data.message);
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
        Already have an account? <Text style={styles.link}
        onPress={() => navigation.navigate("Login")}
        >Login</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#fddf",
    // justifyContent:'center',
  },

  container2: {
    marginTop: "10%",
  },

  textBold: {
    color: "#000",
    fontSize: 24,
    marginTop: "50%",
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
