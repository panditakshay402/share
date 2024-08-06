import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const Inputtext = ({inputTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{inputTitle}</Text>
      <TextInput style={styles.textInput}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginTop:"5%",
        // flex:1,
        // backgroundColor:'#fff',
        // alignItems:'center',
        // marginTop:"50%",
        // justifyContent:'center',
    },
    text:{
        color:'#000',
        fontSize:18,
        marginLeft:"4%",
        marginRight:"70%",
        marginTop:"0%",
        // backgroundColor:'#fddf',
    },
    textInput:{
        color:'#000',
        fontSize:18,
        borderColor:'black',
        borderWidth:1,
        padding:5,
        margin:2,
        // backgroundColor :'#fddf',
        borderRadius:10,
    }
    
})
export default Inputtext