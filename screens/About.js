import React, { useContext } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function About() {
  const { themeStyles } = useContext(ThemeContext);

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

  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.logo}
      />

      <View style={[styles.sectionCard, { backgroundColor: themeStyles.card }]}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={26}
            color={themeStyles.text}
          />
          <Text style={[styles.title, { color: themeStyles.text }]}>
            About MapITA
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
      </View>

      <View style={[styles.sectionCard, { backgroundColor: themeStyles.card }]}>
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
      </View>

      {team.map((member, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: themeStyles.card }]}
        >
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="account"
              size={34}
              color="#fff"
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={[styles.cardName, { color: themeStyles.text }]}>
                {member.name}
              </Text>
              <Text
                style={[
                  styles.cardDesc,
                  { color: themeStyles.text, fontStyle: "italic" },
                ]}
              >
                ID: {member.id}
              </Text>
              <Text style={[styles.cardDesc, { color: themeStyles.text }]}>
                {member.desc}
              </Text>
            </View>
          </View>
        </View>
      ))}

      <View style={[styles.sectionCard, { backgroundColor: themeStyles.card }]}>
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
          To make mobility within ITA intuitive and seamless using technology
          and smart design.
        </Text>
      </View>

      <View style={[styles.sectionCard, { backgroundColor: themeStyles.card }]}>
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
      </View>

      <View style={[styles.sectionCard, { backgroundColor: themeStyles.card }]}>
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
        </Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  logo: {
    width: "90%",
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center",
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
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    textAlign: "justify",
    marginBottom: 10,
    fontSize: 16,
  },
  version: {
    marginTop: 10,
    fontStyle: "italic",
    fontSize: 14,
    alignSelf: "flex-start",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    textAlign: "justify",
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 6,
    alignSelf: "flex-start",
  },
  bullet: {
    fontSize: 16,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  card: {
    width: "100%",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    flexWrap: "wrap",
  },
  avatar: {
    backgroundColor: "#6C63FF",
    borderRadius: 17,
    padding: 4,
    marginRight: 10,
  },
  cardName: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  cardDesc: {
    fontSize: 15,
    lineHeight: 22,
    flexWrap: "wrap",
  },
  sectionCard: {
    width: "100%",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
