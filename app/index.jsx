import { StyleSheet, Text, View, Image, FlatList, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Logo from '../assets/img/logo clear.png';
import { Colors } from "../constants/Colors";
import { initialBoxesData } from '../constants/initialData';

import ThemedCard from '../components/ThemedCard';
import ThemedView from '../components/ThemedView';

const Home = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView>
      <Text>Home Screen</Text>
      <ThemedCard />

    </ThemedView>
  );
};















export default Home;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8F9FA' },
  mainContainer: { flex: 1 },
  listContent: { paddingBottom: 100, paddingHorizontal: 16 },

  // --- HEADER ---
  headerContainer: { marginBottom: 20, marginTop: 10 },
  appBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5 },
  logo: { width: 30, height: 30, resizeMode: 'contain', marginRight: 8 },
  appTitle: { fontSize: 20, fontWeight: 'bold',  letterSpacing: 1 },
  subTitle: { textAlign: 'center', color: '#718096', fontSize: 14 },

  // --- ANA KART TASARIMI ---
  /*cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1, // Çok açık gri çerçeve
    marginBottom: 24,
    padding: 16,
    // Gölge
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.,
    shadowRadius: 2,
    elevation: 2,
  },*/

  // Kart Header (Gün İsmi + Progress)
  cardHeader: { marginBottom: 16 },
  dayTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  progressSection: { },
  progressBarBg: { height: 4, backgroundColor: '#EDF2F7', borderRadius: 2, marginBottom: 4 },
  progressBarFill: { height: '100%', backgroundColor: '#8B5CF6', borderRadius: 2 },
  progressText: { fontSize: 12, color: '#A0AEC0', textAlign: 'right' },

  // Task Listesi
  taskList: { marginBottom: 10 },
  taskItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginBottom: 10,
    // Task kartı gölgesi
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 1,
    elevation: 1,
  },
  checkbox: { marginRight: 12 },
  taskInput: { flex: 1, fontSize: 15, },
  actionIcons: { flexDirection: 'row', alignItems: 'center' },

  // Footer (Ekleme Alanı)
  cardFooter: { marginTop: 5 },
  footerIconsRow: { flexDirection: 'row', marginBottom: 8, paddingLeft: 4 },
  addInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5, 
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 6,
    paddingVertical: 6,
    height: 50,
  },
  addInput: { flex: 1, fontSize: 15,height: 100 },
  addButton: {
    backgroundColor: '#8B5CF6', // Mor Buton
    borderRadius: 8,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});