import { StyleSheet, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

//Themed Components
import ThemedView from '../../components/ThemedView'
//import ThemedCard from '../../components/ThemedCard'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true}>
        Register Screen
      </ThemedText>

      <ThemedButton>
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