import React, { useContext } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PrivacyPolicy() {
  const { themeStyles } = useContext(ThemeContext);

  const Section = ({ icon, title, children }) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color={themeStyles.text}
        />
        <Text style={[styles.subTitle, { color: themeStyles.text }]}>
          {title}
        </Text>
      </View>
      {children}
    </View>
  );

  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="shield-lock-outline"
          size={32}
          color={themeStyles.text}
        />
        <Text style={[styles.title, { color: themeStyles.text }]}>
          Privacy Policy
        </Text>
      </View>

      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        At Mapita, we are committed to protecting your personal information.
        This policy outlines what data we collect and how we use it.
      </Text>

      <Section icon="account-box-outline" title="Information We Collect">
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          • Your email address when you contact us or request support.{"\n"}•
          Usage data and interactions within the app.{"\n"}• Device information
          (non-personal) such as OS and model.
        </Text>
      </Section>

      <Section icon="cog-outline" title="How We Use This Information">
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          • To respond to inquiries.{"\n"}• To improve app performance and
          usability.{"\n"}• To analyze usage patterns for future updates.
        </Text>
      </Section>

      <Section icon="lock-outline" title="Data Sharing">
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          We do not sell or share your personal data. All information is stored
          securely and only accessible to authorized team members.
        </Text>
      </Section>

      <Section icon="email-outline" title="Contact">
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          For questions about your data or this policy, contact us at{" "}
          <Text style={styles.bold}>medinajuarez180@gmail.com</Text>.
        </Text>
      </Section>

      <Section icon="update" title="Updates">
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          We may update this policy from time to time. Major changes will be
          communicated through the app.
        </Text>
      </Section>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
  bold: {
    fontWeight: "600",
  },
});
