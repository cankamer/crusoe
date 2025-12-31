import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import {Link} from 'expo-router'
import {Colors} from "../../constants/Colors"

//Themed Components
import ThemedCard from '../../components/ThemedCard';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';


const Calender = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView>
      <ThemedText>
        This is the Calendar Page
      </ThemedText>
    </ThemedView>
    
  )
}

export default Calender

const styles = StyleSheet.create({})