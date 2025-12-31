import React from 'react'
import { View, useColorScheme, StyleSheet, Text } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.card, { backgroundColor: theme.uiBackground, borderColor: theme.border }, style]} {...props}>
      {children}
        <Text style={[styles.title, { color: theme.title }]}>
        Pazartesi
        </Text>
    </View>
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 16,
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});