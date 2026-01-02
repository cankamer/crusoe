import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useUser } from '../../hooks/useUser'

const AuthLayout = () => {
  const {user} = useUser();
  console.log("Auth Layout User:", user);
  return (
    <>
      <StatusBar style ="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }}>

      </Stack>  
    </>
  )
}

export default AuthLayout
