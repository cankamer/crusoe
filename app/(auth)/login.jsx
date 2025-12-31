import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

//Themed Components
import ThemedView from '../../components/ThemedView'
//import ThemedCard from '../../components/ThemedCard'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      
      <ThemedText title={true}>
        Login Screen
      </ThemedText>

      <ThemedButton>
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