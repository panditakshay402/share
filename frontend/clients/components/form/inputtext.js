import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Inputtext = ({
  inputTitle,
  keyboardType,
  autoComplete,
  secureTextEntry = false,
  value,
  setValue,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{inputTitle}</Text>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder={inputTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
  },
  text: {
    color: "#000",
    fontSize: 16,
    marginLeft: "1%",
    marginRight: "70%",
    marginTop: "1%",
    fontWeight: "bold",
    // backgroundColor:'#fddf',
  },
  textInput: {
    color: "Black",
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 2,
    // backgroundColor :'#fddf',
    borderRadius: 8,
    textShadowColor: "black",

  },
});
export default Inputtext;
