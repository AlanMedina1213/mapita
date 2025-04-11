import React, { useState, useContext } from 'react';
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
      return;
    }

    const subject = `Mensaje de ${name}`;
    const body = `Nombre: ${name}\nCorreo: ${email}\n\n${msg}`;
    const mailtoUrl = `mailto:medinajuarez180@gmail.com.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl).catch(() =>
      Alert.alert('Error', 'No se pudo abrir el correo')
    );
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(() =>
      Alert.alert('Error', 'No se pudo abrir el enlace')
    );
  };

  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.title, { color: themeStyles.text }]}>Contáctanos</Text>

      <Text style={[styles.label, { color: themeStyles.text }]}>Nombre</Text>
      <TextInput
        style={[styles.input, { borderColor: themeStyles.text, color: themeStyles.text }]}
        placeholder="Tu nombre"
        placeholderTextColor={themeStyles.text}
        value={name}
        onChangeText={setName}
      />

      <Text style={[styles.label, { color: themeStyles.text }]}>Correo</Text>
      <TextInput
        style={[styles.input, { borderColor: themeStyles.text, color: themeStyles.text }]}
        placeholder="tucorreo@ejemplo.com"
        placeholderTextColor={themeStyles.text}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={[styles.label, { color: themeStyles.text }]}>Mensaje</Text>
      <TextInput
        style={[styles.textArea, { borderColor: themeStyles.text, color: themeStyles.text }]}
        multiline
        numberOfLines={4}
        placeholder="Escribe tu mensaje aquí..."
        placeholderTextColor={themeStyles.text}
        value={msg}
        onChangeText={setMsg}
      />

      <Button title="Enviar Correo" onPress={handleEmailSend} />

      <View style={styles.separator} />

      {/* Redes y contacto */}
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
      </TouchableOpacity>

      <View style={styles.separator} />

      <Text style={[styles.label, { color: themeStyles.text }]}>Teléfono</Text>
      <Text style={{ color: themeStyles.text }}>449 418 7446 ext. 123</Text>

      <Text style={[styles.label, { color: themeStyles.text, marginTop: 10 }]}>Dirección</Text>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    width: '100%',
  },
  textArea: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    height: 100,
    textAlignVertical: 'top',
    width: '100%',
  },
  separator: {
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignSelf: 'stretch',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
