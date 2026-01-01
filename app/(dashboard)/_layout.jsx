import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Stack } from 'expo-router'
import {Colors} from "../../constants/Colors"
import {Ionicons} from '@expo/vector-icons';

//Themed Components
import ThemedCard from '../../components/ThemedCard';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';


const DashboardLayout = () => {
      const colorScheme = useColorScheme()
      const theme = Colors[colorScheme] ?? Colors.light
  return (

    <Tabs
    screenOptions={{ 
      headerShown: false, 
      tabBarStyle: {
        position: 'absolute',
        borderTopWidth: 0,
        height:75, 
        borderRadius:100, 
        marginVertical:15, 
        marginHorizontal:10,
        backgroundColor: theme.navBackground
      }, 
      tabBarItemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarIconStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    tabBarLabelStyle: {
      fontSize: 11,
      marginTop: -10,   
      marginBottom: 8,
    },
        tabBarActiveTintColor: theme.iconColorFocused, 
        tabBarInactiveTintColor: theme.iconColor 
      }} 
      >
    <Tabs.Screen 
      name="calendar" 
      options={{ title: 'Calendar', tabBarIcon:({focused}) => (
        <Ionicons 
        name={focused ? 'calendar' : 'calendar-outline'}
        color={focused ? theme.iconColorFocused : theme.iconColor}
        size={24} 
       />
      ) }} 
      />
      <Tabs.Screen 
      name="home" 
      options={{ title: 'Home', tabBarIcon:({focused}) => (
        <Ionicons 
        name={focused ? 'home' : 'home-outline'}
        color={focused ? theme.iconColorFocused : theme.iconColor}
        size={24} 
       />
      ) }} 
      />
      <Tabs.Screen 
      name="profile" 
      options={{ title: 'Profile', tabBarIcon:({focused}) => (
        <Ionicons 
        name={focused ? 'person' : 'person-outline'}
        color={focused ? theme.iconColorFocused : theme.iconColor}
        size={24} 
       />
      ) }} 
      />
    </Tabs>

   
  )
}

export default DashboardLayout

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
})