import React from 'react'
import { View, useColorScheme, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const ThemedView = ({ style, children,safe=true, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
 if (!safe) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }, style]} {...props}> 
        {children}
      </View>
    )
  }
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }, style]} {...props}>
      {children}
    </SafeAreaView>
  )
}

export default ThemedView

const styles = StyleSheet.create({
  container: { flex: 1 },
  
})