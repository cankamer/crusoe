import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import {Link} from 'expo-router'
import {Colors} from "../constants/Colors"

const Calender = () => {
      const colorScheme = useColorScheme()
      const theme = Colors[colorScheme] ?? Colors.light
  return (
    <SafeAreaView>
      <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={styles.title}>Calendar</Text>
      <Link href='/'>
      Home
      </Link>
      </View>


    </SafeAreaView>

    
  )
}

export default Calender

const styles = StyleSheet.create({
    header: {
    backgroundColor: '#1B211A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent:'center',
  },
  title:{
    color: '#000000ff',
    fontWeight:'bold',
    fontSize: 20,
  },
})