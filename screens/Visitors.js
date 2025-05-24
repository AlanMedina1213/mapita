import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { firestore } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function Visitors() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [reason, setReason] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [error, setError] = useState("");

  const { themeStyles } = useContext(ThemeContext);

  const qrData = `Nombre: ${name}\nCorreo: ${email}\nNumero: ${number}`;

  // Función para guardar en Firestore
  const saveVisitorToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(firestore, "visitors"), {
        name,
        email,
        number,
        reason,
        createdAt: Timestamp.now(),
      });
      console.log("Visitor saved with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding visitor: ", error);
    }
  };

  const handleGenerateQR = () => {
    if (!name || !email || !number || !reason) {
      setError("Please fill in all the fields before generating the QR.");
      setShowQR(false);
    } else {
      setError("");
      setShowQR(true);
      saveVisitorToFirestore(); // Guardar en Firestore
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.logo}
      />
      <Text style={[styles.title, { color: themeStyles.text }]}>
        Visitors Registration
      </Text>

      <TextInput
        style={[
          styles.input,
          { color: themeStyles.text, borderColor: themeStyles.text },
        ]}
        placeholder="Name"
        placeholderTextColor={themeStyles.text}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={[
          styles.input,
          { color: themeStyles.text, borderColor: themeStyles.text },
        ]}
        placeholder="Email"
        placeholderTextColor={themeStyles.text}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={[
          styles.input,
          { color: themeStyles.text, borderColor: themeStyles.text },
        ]}
        placeholder="Phone Number"
        placeholderTextColor={themeStyles.text}
        onChangeText={setNumber}
        value={number}
        keyboardType="phone-pad"
      />
      <TextInput
        style={[
          styles.input,
          {
            height: 80,
            color: themeStyles.text,
            borderColor: themeStyles.text,
          },
        ]}
        placeholder="Reason for visit"
        placeholderTextColor={themeStyles.text}
        onChangeText={setReason}
        value={reason}
        multiline
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button title="Generate code QR" onPress={handleGenerateQR} />

      {showQR && (
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.subtitle, { color: themeStyles.text }]}>
            Your code QR:
          </Text>
          <QRCode value={qrData} size={200} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  logo: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
