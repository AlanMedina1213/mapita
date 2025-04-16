<<<<<<< HEAD
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { ThemeContext } from "../../context/ThemeContext";

export default function Login({ navigation }) {
  const { themeStyles } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
        <Text style={[styles.title, { color: themeStyles.text }]}>Welcome</Text>

        <View style={styles.inputContainer}>
          <Icon
            name="email-outline"
            size={22}
            color={themeStyles.text}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: themeStyles.text }]}
            placeholder="Email address"
            placeholderTextColor={themeStyles.placeholder}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

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

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3CB371" }]}
          onPress={handleLogin}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={[styles.linkText, { color: themeStyles.link }]}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "gray" }]}
          onPress={() => {
            navigation.navigate("Visitors");
          }}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>
            Continue as Visitor
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
=======
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => navigation.replace('Main')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
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
