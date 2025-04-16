// screens/Profile.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Profile({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      console.error("Error al cerrar sesión: ", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: user.photoURL || "https://via.placeholder.com/150" }}
            style={styles.profileImage}
          />
          <Text style={styles.text}>
            Bienvenido, {user.displayName || "Usuario"}
          </Text>
          <Text style={styles.text}>Correo: {user.email}</Text>
          <Button title="Cerrar sesión" onPress={handleLogout} />
        </View>
      ) : (
        <Text style={styles.text}>No has iniciado sesión</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileContainer: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 10 },
});
