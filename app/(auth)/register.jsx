import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

//Themed Components
import ThemedView from '../../components/ThemedView'
//import ThemedCard from '../../components/ThemedCard'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
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
      />
      <ThemedTextInput style={{width: 300, height: 50}} 
      placeholder="Email"
      keyboardType="email-address"
      />
      <ThemedTextInput style={{width: 300, height: 50}} 
      placeholder="Password"
      secureTextEntry={true}
      />
      <ThemedTextInput style={{width: 300, height: 50}} 
      placeholder="Confirm Password" 
      secureTextEntry={true}
      />
      <Spacer />

      <ThemedButton style={{width: 300}}>
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