import { View, Text ,StyleSheet, TextInput} from 'react-native'
import React from 'react'
import Inputtext from '../../components/form/inputtext'


const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Register</Text>
      <View style={styles.container2}>
       <Inputtext inputTitle={'Name'}/>
       <Inputtext inputTitle={'Email'}/>
       <Inputtext inputTitle={'Password'}/>
      </View>
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