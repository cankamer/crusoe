import { StyleSheet } from 'react-native'
import React from 'react'
import {Colors} from "../../constants/Colors"

//Themed Components
import ThemedCard from '../../components/ThemedCard';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';


const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={{alignItems:"center", justifyContent:"center"}}>
        This is the Home Page
      </ThemedText>
      <ThemedCard/>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})