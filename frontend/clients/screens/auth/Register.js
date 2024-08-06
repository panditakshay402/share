import { View, Text ,StyleSheet, TextInput} from 'react-native'
import React,{useState} from 'react'
import Inputtext from '../../components/form/inputtext'


const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Register</Text>
      <View style={styles.container2}>
       <Inputtext 
       inputTitle={'Name'}
       value={name}
       setValue={setName}
       
       />

       <Inputtext 
       inputTitle={'Email'}
       keyboardType={'email-address'}
       autoComplete={'email'}
       value={email}
       setValue={setEmail}
       />

       <Inputtext 
       inputTitle={'Password'}
       secureTextEntry={true}
       autoComplete={'password'}
       value={password}
       setValue={setPassword}    
       />
      </View>
      <Text>{JSON.stringify({name,email,password},null,4)}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        marginTop:"50%",
        // justifyContent:'center',
    },

    container2:{
        
        marginTop:"10%",
    },

    textBold:{
        color:'#000',
        fontSize:24,
    },
    
})

export default Register