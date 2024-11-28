// app/screens/HomeScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';

const HomeScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarAnimation = new Animated.Value(-200); // Start position off-screen

  const toggleSidebar = () => {
    if (sidebarVisible) {
      Animated.timing(sidebarAnimation, {
        toValue: -200, // Move off-screen
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(sidebarAnimation, {
        toValue: 0, // Move on-screen
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header with Toggle Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleSidebar}>
          <Text style={styles.toggleText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>HomeScreen</Text>
      </View>

      {/* Animated Sidebar */}
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarAnimation }] }]}>
        <ScrollView>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Profile Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Summary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Help</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>

      {/* Centered Content */}
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
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  toggleButton: {
    padding: 10,
  },
  toggleText: {
    fontSize: 24,
    color: '#ffffff',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200, // Adjust the width as needed
    height: '100%',
    backgroundColor: '#3700b3',
    paddingVertical: 15,
  },
  menuItem: {
    paddingHorizontal: 10,
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
