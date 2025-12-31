import { StyleSheet, Text, View, Image, FlatList, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Logo from '../assets/img/logo clear.png';
import { Colors } from "../constants/Colors";
import { Link } from 'expo-router';

//Themed Components
import ThemedCard from '../components/ThemedCard';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';


const Index = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={styles.container}>
      <Spacer />

        <Link href = "/login" style={{color:theme.title}}>
         <ThemedText>
           Go to Login
         </ThemedText>       
        </Link>
        
        <Spacer />

        <Link href = "/home" style={{color:theme.title}}>
         <ThemedText>
           Go to Home
         </ThemedText>       
        </Link>

    </ThemedView>
  );
};















export default Index;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});