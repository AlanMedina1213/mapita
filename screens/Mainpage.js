// screens/MainPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text>Main Page - Mapita</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
