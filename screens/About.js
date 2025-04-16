import React, { useContext } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
<<<<<<< HEAD
import { MaterialCommunityIcons } from "@expo/vector-icons";
=======
>>>>>>> b0790072320257c117cbf4465b00de0988df263d

export default function About() {
  const { themeStyles } = useContext(ThemeContext);

<<<<<<< HEAD
  const team = [
    {
      name: "María Belén Roque Dávila",
      id: "20150405",
      desc: "Inventive and determined, specializing in visual design.",
    },
    {
      name: "Guillermo Alejandro Melgar Esparza",
      id: "19151677",
      desc: "Analytical and detail-oriented, with expertise in programming logic.",
    },
    {
      name: "Alan Antonio Medina Juárez",
      id: "19151747",
      desc: "Enthusiastic about innovation and skilled in technology integration.",
    },
    {
      name: "Jan Erick Proa Regalado",
      id: "19151757",
      desc: "Ingenious in optimizing performance and user interactions.",
    },
    {
      name: "Edith del Carmen Figueroa Medina",
      id: "20150397",
      desc: "Analytical and detail-oriented, with expertise in programming logic.",
    },
  ];

=======
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.logo}
      />

<<<<<<< HEAD
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="map-marker-radius"
          size={26}
          color={themeStyles.text}
        />
        <Text style={[styles.title, { color: themeStyles.text }]}>
          About Mapita
        </Text>
      </View>

      <Text style={[styles.description, { color: themeStyles.text }]}>
        Welcome to our school map application for the Instituto Tecnológico de
        Aguascalientes (ITA). Our goal is to enhance your campus navigation
        experience — making every corner accessible!
      </Text>

      <Text style={[styles.version, { color: themeStyles.text }]}>
        Version 1.0
      </Text>

      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons
          name="account-group"
          size={22}
          color={themeStyles.text}
        />
        <Text style={[styles.subTitle, { color: themeStyles.text }]}>
          About Us
        </Text>
      </View>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        We are a dedicated team of students from *Multiplatform Mobile
        Applications*, taught by Dr. Fernando Robles Casillas. Each of us
        contributes creativity, tech skills, and drive.
      </Text>

      {team.map((member, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: themeStyles.card }]}
        >
          <Text style={[styles.cardName, { color: themeStyles.text }]}>
            {member.name} ({member.id})
          </Text>
          <Text style={[styles.cardDesc, { color: themeStyles.text }]}>
            {member.desc}
          </Text>
        </View>
      ))}

      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons
          name="target"
          size={22}
          color={themeStyles.text}
        />
        <Text style={[styles.subTitle, { color: themeStyles.text }]}>
          Our Mission
        </Text>
      </View>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        To make mobility within ITA intuitive and seamless using technology and
        smart design.
      </Text>

      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={22}
          color={themeStyles.text}
        />
        <Text style={[styles.subTitle, { color: themeStyles.text }]}>
          Our Values
        </Text>
      </View>
      <View style={styles.bulletRow}>
        <MaterialCommunityIcons
          name="account-check"
          size={18}
          color={themeStyles.text}
        />
        <Text style={[styles.bullet, { color: themeStyles.text }]}>
          Accessibility – Designed for everyone.
        </Text>
      </View>
      <View style={styles.bulletRow}>
        <MaterialCommunityIcons
          name="map-check"
          size={18}
          color={themeStyles.text}
        />
        <Text style={[styles.bullet, { color: themeStyles.text }]}>
          Accuracy – Every location is carefully mapped.
        </Text>
      </View>
      <View style={styles.bulletRow}>
        <MaterialCommunityIcons
          name="handshake"
          size={18}
          color={themeStyles.text}
        />
        <Text style={[styles.bullet, { color: themeStyles.text }]}>
          Collaboration – Built together, stronger.
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons
          name="rocket-launch-outline"
          size={22}
          color={themeStyles.text}
        />
        <Text style={[styles.subTitle, { color: themeStyles.text }]}>
          Why Choose Us?
        </Text>
      </View>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Mapita offers more than just a map – it blends real-time data, smooth
        navigation, and a user-friendly design to enhance your campus journey.
=======
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
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
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
<<<<<<< HEAD
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 30,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
=======
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
<<<<<<< HEAD
  },
  description: {
    textAlign: "justify",
=======
    marginTop: 30,
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  description: {
    textAlign: "center",
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
    marginBottom: 10,
    fontSize: 16,
  },
  version: {
    marginBottom: 20,
    fontStyle: "italic",
    fontSize: 14,
<<<<<<< HEAD
    alignSelf: "flex-start",
=======
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    textAlign: "justify",
  },
<<<<<<< HEAD
  bulletRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 6,
    alignSelf: "flex-start",
  },
  bullet: {
    fontSize: 16,
  },
  card: {
    width: "100%",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardName: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 15,
    lineHeight: 22,
  },
=======
>>>>>>> b0790072320257c117cbf4465b00de0988df263d
});
