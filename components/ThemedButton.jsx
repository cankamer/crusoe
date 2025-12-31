import {StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {Colors} from "../constants/Colors"


const ThemedButton = ({style, ...props}) => {
  return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]}
          {...props}
        />
  )
}

export default ThemedButton
const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginVertical: 10,
    },
        pressed: {
        opacity: 0.7,
    },
 })
