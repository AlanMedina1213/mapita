import React, { useState, useCallback, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { auth } from "../firebaseConfig";
import { signOut, updateProfile } from "firebase/auth";
import { ThemeContext } from "../context/ThemeContext";

// Avatares disponibles
const defaultAvatars = [
  { name: "Avatar 1", source: require("../assets/avatars/avatar1.png") },
  { name: "Avatar 2", source: require("../assets/avatars/avatar2.png") },
  { name: "Avatar 3", source: require("../assets/avatars/avatar3.png") },
  { name: "Avatar 4", source: require("../assets/avatars/avatar4.png") },
  { name: "Avatar 5", source: require("../assets/avatars/avatar5.png") },
];

export default function Profile({ navigation }) {
  const { themeStyles } = useContext(ThemeContext);

  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(defaultAvatars[0]);
  const [loading, setLoading] = useState(false);

  const loadUserData = () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setDisplayName(currentUser.displayName || "");
      const avatarFound = defaultAvatars.find(
        (avatar) => avatar.name === currentUser.photoURL
      );
      setSelectedAvatar(avatarFound || defaultAvatars[0]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadUserData();
    }, [])
  );

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      console.error("Error al cerrar sesión: ", error.message);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      await updateProfile(auth.currentUser, {
        displayName: displayName.trim(),
        photoURL: selectedAvatar.name,
      });
      Alert.alert(
        "Perfil actualizado",
        "Tu perfil ha sido actualizado correctamente."
      );
      loadUserData();
    } catch (error) {
      console.error("Error al actualizar el perfil:", error.message);
      Alert.alert("Error", "No se pudo actualizar el perfil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: themeStyles.background },
      ]}
    >
      <Image source={selectedAvatar.source} style={styles.profileImage} />
      <Text style={[styles.avatarName, { color: themeStyles.text }]}>
        {displayName}
      </Text>

      <View style={styles.buttonWrapper}>
        <Button title="Cerrar sesión" onPress={handleLogout} color="#d9534f" />
      </View>

      <Text style={[styles.label, { color: themeStyles.text }]}>
        Cambiar avatar
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

      <Text style={[styles.label, { color: themeStyles.text }]}>
        Nuevo nombre
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: themeStyles.card,
            color: themeStyles.text,
            borderColor: themeStyles.border,
          },
        ]}
        value={displayName}
        onChangeText={setDisplayName}
        placeholder="Nombre de usuario"
        placeholderTextColor={themeStyles.placeholder}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#3CB371" />
      ) : (
        <View style={styles.buttonWrapper}>
          <Button
            title="Actualizar perfil"
            onPress={handleUpdateProfile}
            color="#3CB371"
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#3CB371",
  },
  avatarName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  avatarSelector: {
    flexDirection: "row",
    marginBottom: 20,
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
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  separator: {
    height: 20,
  },
  buttonWrapper: {
    width: "100%",
    marginBottom: 10,
  },
});
