import React from 'react'
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {Colors} from "../constants/Colors"

const RootLayout = () => {
        const colorScheme = useColorScheme()
        const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
  <StatusBar style="auto" />
      <Stack screenOptions={{ headerStyle: {backgroundColor: theme.backgroundColor}, headerTintColor: theme.title }}>
        <Stack.Screen name="index" options={{ title: 'Home', headerTintColor: theme.title}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />    
        </Stack>
    </>
  )
}

export default RootLayout
