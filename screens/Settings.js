// screens/Settings.js
import React, { useContext } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext.js";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={[styles.container, theme === "dark" && styles.dark]}>
      <Text style={[styles.text, theme === "dark" && styles.textDark]}>
        Dark Mode
      </Text>
      <Switch value={theme === "dark"} onValueChange={toggleTheme} />

      <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
        <Text style={[styles.link, theme === "dark" && styles.textDark]}>
         Learn Privacy Policy
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  dark: {
    backgroundColor: "#121212",
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
  textDark: {
    color: "#fff",
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
});
