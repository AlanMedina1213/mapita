// components/CookieBanner.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();

  if (!visible) return null;

  return (
    <View style={styles.banner}>
      <Text style={styles.text}>
        This app uses cookies to enhance your experience and analyze usage. By
        continuing to use the app, you consent to our use of cookies. Learn more
        in our Privacy Policy.
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text style={styles.button}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
          <Text style={styles.link}>Learn more in Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#eee",
    padding: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 10,
  },
  text: { textAlign: "center", marginBottom: 10 },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    color: "blue",
    fontWeight: "bold",
  },
  link: {
    color: "darkblue",
    textDecorationLine: "underline",
  },
});
