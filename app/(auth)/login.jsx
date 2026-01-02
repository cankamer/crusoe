import { StyleSheet, Pressable, TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

//Themed Components
import ThemedView from '../../components/ThemedView'
//import ThemedCard from '../../components/ThemedCard'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user} = useUser();

  const handleLogin = async() => {
    try{
        await login(email, password)
        //console.log("current user:", user);
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
        Welcome{'\n'}Back!
      </ThemedText>

    <ThemedView style={styles.container}>

      <Spacer />
      
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
      <Spacer />

      <ThemedButton style={{width: 300}} onPress={handleLogin}>

        <ThemedText style ={{color: '#f2f2f2', textAlign: 'center', lineHeight: 50}}>
          Login
        </ThemedText>
      </ThemedButton>

      <Spacer height={100} />

      <Link href = "/register">
          <ThemedText>
            Go to Register
          </ThemedText>
      </Link>

    </ThemedView>
    </ThemedView>
    </TouchableWithoutFeedback>
  )

}

export default Login

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})