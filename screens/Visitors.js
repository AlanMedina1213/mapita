import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Visitors() {
  return (
    <View style={styles.container}>
      <Text>Visitors - Mapita</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
