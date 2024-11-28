// app/screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Box */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Menu 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Menu 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Menu 3</Text>
        </TouchableOpacity>
      </View>

      {/* Centered Text */}
      <View style={styles.content}>
        <Text style={styles.contentText}>HomeScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    paddingVertical: 10,
  },
  menuItem: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  menuText: {
    color: '#ffffff',
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
