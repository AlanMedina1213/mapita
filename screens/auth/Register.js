import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      <Button title="Register" onPress={() => navigation.replace('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { height: 40, borderBottomWidth: 1, marginBottom: 20 },
});
