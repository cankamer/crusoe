import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

//Themed Components
import ThemedCard from '../../components/ThemedCard';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>
        This is the Profile Page
      </ThemedText>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    
  },
})