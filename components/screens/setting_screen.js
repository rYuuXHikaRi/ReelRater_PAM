import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button_profile}>
        <Text style={styles.buttonText_profile}>Username</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>About App</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_logout}>
        <Text style={styles.buttonText_logout}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  button_profile: {
    backgroundColor: '#2E4F4F',
    position: absolute,
    width: 390 px,
    height: 101 px,
    left: 0,
    top: 0,
  },
  button: {
    backgroundColor: '#2E4F4F',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});