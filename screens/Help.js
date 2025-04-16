<<<<<<< HEAD
import React, { useContext, useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { ThemeContext } from "../context/ThemeContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Help() {
  const { themeStyles } = useContext(ThemeContext);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I create an account?",
      answer:
        "Go to the Profile tab and tap “Sign Up.” Fill in your details and confirm your email to get started.",
    },
    {
      question: "Can I use the app offline?",
      answer:
        "Currently, offline mode is not supported. A stable internet connection is required to access maps and search features.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "On the login screen, tap “Forgot Password?” and follow the instructions to reset it via email.",
    },
    {
      question: "How do I report a bug or problem?",
      answer:
        "You can report issues directly via the “Support” section or by emailing us at medinajuarez180@gmail.com.",
    },
  ];
=======
import React, { useContext } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function Help() {
  const { themeStyles } = useContext(ThemeContext);
>>>>>>> b0790072320257c117cbf4465b00de0988df263d

  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
<<<<<<< HEAD
      <View style={styles.titleContainer}>
        <Image
          source={require("../assets/help-icon.png")}
          style={styles.titleImage}
          resizeMode="contain"
        />
        <Text style={[styles.title, { color: themeStyles.text }]}>
          Help Center
        </Text>
      </View>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Introduction
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Welcome to the Help Center. This section is designed to provide answers
        to your questions and guidance for using the app effectively.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Frequently Asked Questions (FAQ)
      </Text>

      {faqData.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => toggleFAQ(index)}
            style={styles.faqHeader}
          >
            <Text style={[styles.faqQuestion, { color: themeStyles.text }]}>
              {item.question}
            </Text>
            <Icon
              name={activeFAQ === index ? "chevron-up" : "chevron-down"}
              size={24}
              color={themeStyles.text}
            />
          </TouchableOpacity>
          <Collapsible collapsed={activeFAQ !== index}>
            <Text style={[styles.faqAnswer, { color: themeStyles.text }]}>
              {item.answer}
            </Text>
          </Collapsible>
        </View>
      ))}

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Step-by-Step Guides
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • To explore nearby places, go to the Explore tab and use filters to
        customize your search.{"\n"}• To search for a specific location, tap on
        the Search tab and enter the place name or address.{"\n"}• To update
        your profile information, navigate to the Profile tab and tap “Edit
        Profile.”
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Troubleshooting
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        If you experience issues with loading the map or app crashes, try the
        following:{"\n"}• Check your internet connection.{"\n"}• Close and
        reopen the app.{"\n"}• Ensure the app is updated to the latest version.
        {"\n"}• If the problem persists, contact our support team.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Contact or Support
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        For additional help, please reach out to us at{" "}
        <Text style={{ fontWeight: "600" }}>medinajuarez@gmail.com</Text> or
        call <Text style={{ fontWeight: "600" }}>(449) 418 7446</Text>. Our team
        is available Monday to Friday, 9am–5pm.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Video Tutorials
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        We are working on a series of short tutorials to help you master each
        feature of the app — from navigation to profile customization. Stay
        tuned!
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Glossary
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        <Text style={{ fontWeight: "600" }}>Pin:</Text> A marker on the map that
        identifies a place or point of interest.{"\n"}
        <Text style={{ fontWeight: "600" }}>Explore:</Text> A feature that helps
        you discover locations based on your preferences.{"\n"}
        <Text style={{ fontWeight: "600" }}>Profile:</Text> Your personal area
        where you can manage settings and preferences.{"\n"}
        <Text style={{ fontWeight: "600" }}>Dark Mode:</Text> A visual theme
        that reduces screen brightness to ease eye strain.
=======
      <Text style={[styles.title, { color: themeStyles.text }]}>
        Centro de Ayuda
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Introducción
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Bienvenido a la sección de ayuda. Aquí encontrarás orientación clara
        para resolver tus dudas y utilizar la aplicación de forma eficiente.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Preguntas Frecuentes (FAQ)
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        - ¿Cómo puedo registrarme?
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        - ¿Puedo acceder sin conexión?
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        - ¿Cómo cambio mi contraseña?
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Guías Paso a Paso
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Navega por las funciones de la app con instrucciones detalladas y
        simples de seguir.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Solución de Problemas
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        ¿Algo no funciona como esperabas? Aquí te damos tips para solucionarlo
        rápidamente.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Contacto o Soporte
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Puedes comunicarte con nuestro equipo en soporte@mapita.com o llamando
        al (123) 456 7890.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Videos o Tutoriales
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Pronto añadiremos contenido visual para facilitar aún más tu
        experiencia.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
        Glosario
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Consulta definiciones clave para que ninguna función o término técnico
        te detenga.
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
<<<<<<< HEAD
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  titleImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
=======
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
<<<<<<< HEAD
  faqHeader: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  faqAnswer: {
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    lineHeight: 21,
  },
=======
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
});
