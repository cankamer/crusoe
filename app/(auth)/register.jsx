import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import {useUser} from '../../hooks/useUser'
import { useState } from 'react'

//Themed Components
import ThemedView from '../../components/ThemedView'
//import ThemedCard from '../../components/ThemedCard'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const {user, register} = useUser();

    const handleRegister =  async () => {
      try{
        await register(email, password, name);
        console.log("current user:", user);
      }catch (error){
        //console.log("Registration error:", error);
      }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView>
      <ThemedText title={true} 
      fontSize={52}
      style={{
      marginHorizontal: 30,
      maraginBottom: 20,
      marginTop: 100,
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      fontWeight: '700',
      textShadowColor: '#ffffff70',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 6,
      }}
      >
        Welcome
      </ThemedText>
    <ThemedView style={styles.container}>

      <Spacer />

      <ThemedTextInput style={{width: 300, height: 50}} 
      placeholder="Username"
      onChangeText={setName}
      value={name}
      />
      <ThemedTextInput style={{width: 300, height: 50}} 
      placeholder="Email"
      keyboardType="email-address"
      onChangeText={setEmail}
      value={email}
      />
      <ThemedTextInput style={{width: 300, height: 50}} 
      placeholder="Password"
      secureTextEntry={true}
      onChangeText={setPassword}
      value={password}
      />
      < ThemedTextInput style={{width: 300, height: 50}} 
      placeholder="Confirm Password" 
      secureTextEntry={true}
      />
      <Spacer />

      <ThemedButton style={{width: 300}} onPress={handleRegister}>
        <ThemedText style ={{color: '#f2f2f2', textAlign: 'center', lineHeight: 50}}>
          Register
        </ThemedText>
      </ThemedButton>

      <Spacer height={100} />
      
      <Link href = "/login">
          <ThemedText>
            Go to Login Page
          </ThemedText>
      </Link>

    </ThemedView>
    </ThemedView>
    </TouchableWithoutFeedback>
  )

}

export default Register

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})