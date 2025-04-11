import React, { useContext } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { themeStyles } = useContext(ThemeContext);

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
        Sobre Mapita
      </Text>

      <Text style={[styles.description, { color: themeStyles.text }]}>
        Mapita es una app del Tecnológico de Aguascalientes para encontrar
        fácilmente oficinas, salones, eventos y más dentro del campus.
      </Text>

      <Text style={[styles.version, { color: themeStyles.text }]}>
        Versión 1.0
      </Text>

      <Text style={[styles.subTitle, { color: themeStyles.text }]}>
        Sobre Nosotros
      </Text>

      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Tener una página “Acerca de mí” en tu sitio web es crucial para tu
        negocio, de modo que puedas crear una buena primera impresión y
        establecer conexiones sólidas con tus lectores mientras aumentas tu
        público.
      </Text>

      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Una página “Acerca de mí” debe transmitir quién eres, cuáles son tus
        valores y principios, cómo llegaste a donde estás y por qué tu producto
        o servicio es importante para ti.
      </Text>

      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Los factores “blandos” hacen única a una empresa. Sin embargo, el
        carácter amable y las características comunes no son suficientes para
        motivar a los visitantes de la página web a comprar: deben tener también
        la confianza de que tu empresa tiene la mejor oferta y la más adecuada
        para lo que necesitan.
      </Text>

      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Por lo tanto, usa los textos “Sobre nosotros” para subrayar las
        competencias y la experiencia de tu empresa de forma concisa y con
        cifras, datos y hechos. ¿Cuántos proyectos de clientes has realizado con
        éxito? ¿Tienes algún premio que mostrar? ¿Qué certificaciones han
        recibido tus productos?
      </Text>

      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Facilita a los visitantes de tu página web las razones racionales que
        explican que contigo están en buenas manos.
      </Text>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  description: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
  },
  version: {
    marginBottom: 20,
    fontStyle: "italic",
    fontSize: 14,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    textAlign: "justify",
  },
});
