<<<<<<< HEAD
import React, { useState, useContext } from "react";
=======
import React, { useState, useContext } from 'react';
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Linking,
  Alert,
  TouchableOpacity,
  ScrollView,
<<<<<<< HEAD
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

export default function Contact() {
  const { themeStyles } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleEmailSend = () => {
    if (!name || !email || !msg) {
      Alert.alert("Incomplete Fields", "Please complete all required fields.");
=======
} from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

export default function Contact() {
  const { themeStyles } = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleEmailSend = () => {
    if (!name || !email || !msg) {
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos');
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
      return;
    }

    const subject = `Mensaje de ${name}`;
    const body = `Nombre: ${name}\nCorreo: ${email}\n\n${msg}`;
<<<<<<< HEAD
    const mailtoUrl = `mailto:medinajuarez180@gmail.com.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl).catch(() =>
      Alert.alert("Error", "Unable to open the email.")
=======
    const mailtoUrl = `mailto:medinajuarez180@gmail.com.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl).catch(() =>
      Alert.alert('Error', 'No se pudo abrir el correo')
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
    );
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(() =>
<<<<<<< HEAD
      Alert.alert("Error", "Unable to open the link")
=======
      Alert.alert('Error', 'No se pudo abrir el enlace')
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
    );
  };

  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
<<<<<<< HEAD
      <Text style={[styles.title, { color: themeStyles.text }]}>
        Contact us
      </Text>

      <Text style={[styles.label, { color: themeStyles.text }]}>Name</Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: themeStyles.text, color: themeStyles.text },
        ]}
        placeholder="Your Name"
=======
      <Text style={[styles.title, { color: themeStyles.text }]}>Contáctanos</Text>

      <Text style={[styles.label, { color: themeStyles.text }]}>Nombre</Text>
      <TextInput
        style={[styles.input, { borderColor: themeStyles.text, color: themeStyles.text }]}
        placeholder="Tu nombre"
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
        placeholderTextColor={themeStyles.text}
        value={name}
        onChangeText={setName}
      />

<<<<<<< HEAD
      <Text style={[styles.label, { color: themeStyles.text }]}>Email</Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: themeStyles.text, color: themeStyles.text },
        ]}
        placeholder="youremail@example.com"
=======
      <Text style={[styles.label, { color: themeStyles.text }]}>Correo</Text>
      <TextInput
        style={[styles.input, { borderColor: themeStyles.text, color: themeStyles.text }]}
        placeholder="tucorreo@ejemplo.com"
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
        placeholderTextColor={themeStyles.text}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

<<<<<<< HEAD
      <Text style={[styles.label, { color: themeStyles.text }]}>Menssage</Text>
      <TextInput
        style={[
          styles.textArea,
          { borderColor: themeStyles.text, color: themeStyles.text },
        ]}
        multiline
        numberOfLines={4}
        placeholder="Write your message here..."
=======
      <Text style={[styles.label, { color: themeStyles.text }]}>Mensaje</Text>
      <TextInput
        style={[styles.textArea, { borderColor: themeStyles.text, color: themeStyles.text }]}
        multiline
        numberOfLines={4}
        placeholder="Escribe tu mensaje aquí..."
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
        placeholderTextColor={themeStyles.text}
        value={msg}
        onChangeText={setMsg}
      />

<<<<<<< HEAD
      <Button title="Send Email" onPress={handleEmailSend} />
=======
      <Button title="Enviar Correo" onPress={handleEmailSend} />
>>>>>>> b0790072320257c117cbf4465b00de0988df263d

      <View style={styles.separator} />

      {/* Redes y contacto */}
<<<<<<< HEAD
      <Text style={[styles.subTitle, { color: themeStyles.text }]}>
        Other ways to contact us
      </Text>

      <TouchableOpacity
        style={styles.iconRow}
        onPress={() => openLink("https://wa.me/524494187446")}
      >
        <FontAwesome name="whatsapp" size={24} color="green" />
        <Text style={[styles.iconText, { color: themeStyles.text }]}>
          Send a message via WhatsApp
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconRow}
        onPress={() =>
          openLink("https://www.facebook.com/tecnm.itaguascalientes")
        }
      >
        <FontAwesome name="facebook" size={24} color="#1877F2" />
        <Text style={[styles.iconText, { color: themeStyles.text }]}>
          Visit us on Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconRow}
        onPress={() => openLink("https://aguascalientes.tecnm.mx/")}
      >
        <Entypo name="link" size={24} color="blue" />
        <Text style={[styles.iconText, { color: themeStyles.text }]}>
          Go to the ITA website
        </Text>
=======
      <Text style={[styles.subTitle, { color: themeStyles.text }]}>Otras formas de contacto</Text>

      <TouchableOpacity style={styles.iconRow} onPress={() => openLink('https://wa.me/524494187446')}>
        <FontAwesome name="whatsapp" size={24} color="green" />
        <Text style={[styles.iconText, { color: themeStyles.text }]}>Enviar mensaje por WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconRow} onPress={() => openLink('https://www.facebook.com/tecnm.itaguascalientes')}>
        <FontAwesome name="facebook" size={24} color="#1877F2" />
        <Text style={[styles.iconText, { color: themeStyles.text }]}>Visítanos en Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconRow} onPress={() => openLink('https://aguascalientes.tecnm.mx/')}>
        <Entypo name="link" size={24} color="blue" />
        <Text style={[styles.iconText, { color: themeStyles.text }]}>Ir al sitio del ITA</Text>
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
      </TouchableOpacity>

      <View style={styles.separator} />

<<<<<<< HEAD
      <Text style={[styles.label, { color: themeStyles.text }]}>Phone</Text>
      <Text style={{ color: themeStyles.text }}>449 418 7446</Text>

      <Text style={[styles.label, { color: themeStyles.text, marginTop: 10 }]}>
        Address
      </Text>
=======
      <Text style={[styles.label, { color: themeStyles.text }]}>Teléfono</Text>
      <Text style={{ color: themeStyles.text }}>449 418 7446 ext. 123</Text>

      <Text style={[styles.label, { color: themeStyles.text, marginTop: 10 }]}>Dirección</Text>
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
      <Text style={{ color: themeStyles.text }}>
        Av. Tecnológico 601, Col. Benito Juárez, Aguascalientes, Ags.
      </Text>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
<<<<<<< HEAD
    alignItems: "center",
    justifyContent: "flex-start",
=======
    alignItems: 'center',
    justifyContent: 'flex-start',
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
<<<<<<< HEAD
    fontWeight: "bold",
=======
    fontWeight: 'bold',
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  },
  subTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
<<<<<<< HEAD
    alignSelf: "flex-start",
=======
    alignSelf: 'flex-start',
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
<<<<<<< HEAD
    width: "100%",
=======
    width: '100%',
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  },
  textArea: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    height: 100,
<<<<<<< HEAD
    textAlignVertical: "top",
    width: "100%",
=======
    textAlignVertical: 'top',
    width: '100%',
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  },
  separator: {
    marginVertical: 20,
    borderBottomWidth: 1,
<<<<<<< HEAD
    borderBottomColor: "#ccc",
    alignSelf: "stretch",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    alignSelf: "flex-start",
=======
    borderBottomColor: '#ccc',
    alignSelf: 'stretch',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'flex-start',
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
