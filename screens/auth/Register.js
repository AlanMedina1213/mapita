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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { ThemeContext } from "../../context/ThemeContext";
import { getAuthErrorMessage } from "../src/utils/firebaseErrorMessages.js";

// Importación de avatares locales
const defaultAvatars = [
  { name: "Avatar 1", source: require("../../assets/avatars/avatar1.png") },
  { name: "Avatar 2", source: require("../../assets/avatars/avatar2.png") },
  { name: "Avatar 3", source: require("../../assets/avatars/avatar3.png") },
  { name: "Avatar 4", source: require("../../assets/avatars/avatar4.png") },
  { name: "Avatar 5", source: require("../../assets/avatars/avatar5.png") },
];

export default function Register({ navigation }) {
  const { themeStyles } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(defaultAvatars[0]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !confirm) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (password !== confirm) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: selectedAvatar.name, // Guardar nombre o ruta, puedes adaptar esto
      });

      navigation.replace("Main");
    } catch (error) {
      const mensaje = getAuthErrorMessage(error.code);
      Alert.alert("Error", mensaje);
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
        <Image source={selectedAvatar.source} style={styles.profileImage} />
        <Text style={[styles.avatarName, { color: themeStyles.text }]}>
          {selectedAvatar.name}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.avatarSelector}
        >
          {defaultAvatars.map((avatar, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedAvatar(avatar)}
            >
              <Image
                source={avatar.source}
                style={[
                  styles.avatarOption,
                  selectedAvatar.name === avatar.name && styles.selectedAvatar,
                ]}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={[styles.title, { color: themeStyles.text }]}>
          Create Account
        </Text>

        {/* Inputs */}

        <View style={styles.inputContainer}>
          <Icon
            name="account-outline"
            size={22}
            color={themeStyles.text}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: themeStyles.text }]}
            placeholder="Name"
            placeholderTextColor={themeStyles.placeholder}
            value={name}
            onChangeText={setName}
          />
        </View>

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
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={themeStyles.text}
            />
          </TouchableOpacity>
        </View>

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
            secureTextEntry={!showConfirmPassword}
            value={confirm}
            onChangeText={setConfirm}
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

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3CB371" }]}
          onPress={handleRegister}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.linkText, { color: themeStyles.link }]}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#3CB371",
  },
  avatarName: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  avatarSelector: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  avatarOption: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedAvatar: {
    borderColor: "#3CB371",
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
});
