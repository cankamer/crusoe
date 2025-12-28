import React from 'react';
import { View, TouchableOpacity, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { MotiText, AnimatePresence, MotiImage } from 'moti';
import { useRouter, usePathname } from 'expo-router';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { Colors } from "../constants/Colors";

export function BottomNav() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  const tabs = [
    { id: 0, image: require('../assets/img/calendar.png'), label: 'Calendar', path: '/calendar' },
    { id: 1, image: require('../assets/img/home.png'), label: 'Home', path: '/' }, 
    { id: 2, image: require('../assets/img/user.png'), label: 'Profile', path: '/profile' },
  ];

  const activeIndex = tabs.findIndex(tab => tab.path === pathname);
  const NAV_WIDTH = width - 20; 
  const TAB_WIDTH = (NAV_WIDTH - 20) / tabs.length; 

  return (
    <View style={styles.container}>
      <View style={[styles.navBar, { width: NAV_WIDTH, backgroundColor: theme.navBackground }]}>
        
        {/* Hareketli Arka Plan Indicator */}
        <View 
          style={[
            styles.activeIndicator, 
            { 
              width: TAB_WIDTH, 
              backgroundColor: theme.iconColourFocused,
              transform: [{ translateX: activeIndex * TAB_WIDTH }] 
            }
          ]}
        />

        {tabs.map((tab) => {
          const isActive = pathname === tab.path;

          return (
            <TouchableOpacity
              key={tab.id}
              onPress={() => router.push(tab.path)}
              activeOpacity={0.8}
              style={styles.tabItem}
            >
              {/* LAYOUT ANIMASYONU  */}
              <Animated.View 
                style={styles.contentWrapper}
                // layout değiştiğinde (yazı küçüldüğünde) ikonun kayma hızı
                layout={LinearTransition.springify().damping(100).stiffness(1000)}
              >
                <MotiImage 
                  source={tab.image} 
                  style={styles.iconImage}
                  animate={{ tintColor: isActive ? theme.titleContest : theme.title }}
                  transition={{ type: 'timing', duration: 30 }}
                />
                
                <AnimatePresence>
                  {isActive && (
                    <MotiText
                      // GİRİŞ (Hızlı olabilir)
                      from={{ opacity: 0, width: 0, translateX: -5, marginLeft: 0 }}
                      animate={{ opacity: 1, width: 'auto', translateX: 0, marginLeft: 3 }}
                      
                      // ÇIKIŞ 
                      //exit={{ 
                      //  opacity: 0, 
                      //  width: 0,       
                      //  marginLeft: 0,  
                       // translateX: -5 
                      //}}
                      
                      // Hız ayarları
                      transition={{ 
                        type: 'timing', 
                        duration: 400, 
                      }}
                      
                      style={styles.label}
                      color={theme.titleContest}
                      numberOfLines={1}
                    >
                      {tab.label}
                    </MotiText>
                  )}
                </AnimatePresence>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
    zIndex: 100,
  },
  navBar: {
    flexDirection: 'row',
    height: 65,
    borderRadius: 35,
    paddingHorizontal: 10,
    boxShadow:' 4px 4px 6px rgba(0, 0, 0, 0.93)',
    alignItems: 'center',
    position: 'relative',
  },
  tabItem: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  activeIndicator: {
    position: 'absolute',
    left: 10, 
    height: '75%',
    borderRadius: 25,
 
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden' 
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});