import React, { useContext } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function Help() {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
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
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
});
