import { StatusBar, StyleSheet, View, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from "../constants/Colors"
import { BottomNav } from '../components/BottomNav'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
            
            <View style={{ flex: 1 }}>
                <Tabs screenOptions={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' },
                }}>
                    <Tabs.Screen 
                        name="index" 
                        options={{ 
                            title: 'Home',
                            href: '/'
                        }} 
                    />
                    <Tabs.Screen 
                        name="calendar" 
                        options={{ 
                            title: 'Calendar',
                            href: '/calendar'
                        }} 
                    />
                    <Tabs.Screen 
                        name="profile" 
                        options={{ 
                            title: 'Profile',
                            href: '/profile'
                        }} 
                    />
                </Tabs>

                {/* Navigasyon Barı Stack'in üzerinde (absolute olduğu için) görünecek */}
                <BottomNav />
            </View>
        </GestureHandlerRootView>
    )
}

export default RootLayout
const styles = StyleSheet.create({})    