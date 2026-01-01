import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import React, { Children } from 'react'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput
    style={[
        {
        marginVertical: 7,
        backgroundColor: theme.uiBackground,
        color: theme.text,
        padding: 10,
        borderRadius: 10,
    },
        style
    ]}
    placeholderTextColor={theme.placeholderColor}
    {...props}
    />
  )
}

export default ThemedTextInput
