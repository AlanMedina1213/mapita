// screens/Search
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.text}>Busca las ubicaciones más buscadas</Text>
=======
      <Text style={styles.text}>Explora las ubicaciones más buscadas</Text>
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20 },
});
