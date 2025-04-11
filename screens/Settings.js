// screens/Settings.js
import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext.js';

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, theme === 'dark' && styles.dark]}>
      <Text style={[styles.text, theme === 'dark' && styles.textDark]}>Modo Oscuro</Text>
      <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#121212',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
});
