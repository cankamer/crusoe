import React from 'react'
import { View, useColorScheme, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  )
}

export default ThemedView

const styles = StyleSheet.create({
  container: { flex: 1 },
  
})