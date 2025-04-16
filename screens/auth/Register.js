<<<<<<< HEAD
import React, { useState, useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { ThemeContext } from "../../context/ThemeContext";

export default function Register({ navigation }) {
  const { themeStyles } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    if (password !== confirm) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace("Main");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        { backgroundColor: themeStyles.background },
      ]}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Image
          source={require("../../assets/splash-icon.png")}
          style={styles.logo}
        />
        <Text style={[styles.title, { color: themeStyles.text }]}>
          Create Account
        </Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Icon
            name="email-outline"
            size={22}
            color={themeStyles.text}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: themeStyles.text }]}
            placeholder="Email"
            placeholderTextColor={themeStyles.placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Icon
            name="lock-outline"
            size={22}
            color={themeStyles.text}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: themeStyles.text, flex: 1 }]}
            placeholder="Password"
            placeholderTextColor={themeStyles.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={themeStyles.text}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <Icon
            name="lock-check-outline"
            size={22}
            color={themeStyles.text}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: themeStyles.text, flex: 1 }]}
            placeholder="Confirm Password"
            placeholderTextColor={themeStyles.placeholder}
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Icon
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={themeStyles.text}
            />
          </TouchableOpacity>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3CB371" }]}
          onPress={handleRegister}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>Register</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.linkText, { color: themeStyles.link }]}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
=======
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
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  input: {
    height: 50,
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
    textDecorationLine: "underline",
  },
=======
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { height: 40, borderBottomWidth: 1, marginBottom: 20 },
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
});
