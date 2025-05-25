import React, { useContext, useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../context/ThemeContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PrivacyPolicy() {
  const { themeStyles } = useContext(ThemeContext);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("privacyConsent").then((value) => {
      if (value === "true") setConsentGiven(true);
    });
  }, []);

  const handleConsent = async () => {
    await AsyncStorage.setItem("privacyConsent", "true");
    setConsentGiven(true);
  };

  const Section = ({ icon, title, children }) => (
    <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
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

  const renderBullet = (text) => (
    <View style={styles.bulletRow}>
      <MaterialCommunityIcons
        name="circle-small"
        size={20}
        color={themeStyles.text}
      />
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        {text}
      </Text>
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
          size={40}
          color={themeStyles.text}
        />
        <Text style={[styles.title, { color: themeStyles.text }]}>
          Privacy Policy
        </Text>
        <Text style={[styles.intro, { color: themeStyles.text }]}>
          Updated: May 2025
        </Text>
      </View>

      <Text style={[styles.description, { color: themeStyles.text }]}>
        At Mapita, we are committed to protecting your personal information.
        This policy outlines what data we collect and how we use it.
      </Text>

      <Section icon="account-box-outline" title="Information We Collect">
        {renderBullet(
          "Your email address when you contact us or request support."
        )}
        {renderBullet("Usage data and interactions within the app.")}
        {renderBullet(
          "Device information (non-personal) such as OS and model."
        )}
      </Section>

      <Section icon="cog-outline" title="How We Use This Information">
        {renderBullet("To respond to inquiries.")}
        {renderBullet("To improve app performance and usability.")}
        {renderBullet("To analyze usage patterns for future updates.")}
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
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("mailto:medinajuarez180@gmail.com")}
          >
            medinajuarez180@gmail.com
          </Text>
          .
        </Text>
      </Section>

      <Section icon="update" title="Updates">
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          We may update this policy from time to time. Major changes will be
          communicated through the app.
        </Text>
      </Section>

      <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
        <View style={styles.sectionHeader}>
          <MaterialCommunityIcons
            name="checkbox-marked-circle-outline"
            size={22}
            color={themeStyles.text}
          />
          <Text style={[styles.subTitle, { color: themeStyles.text }]}>
            Consent
          </Text>
        </View>
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          By continuing to use Mapita, you acknowledge and agree to our privacy
          practices as described in this policy.
        </Text>
        {!consentGiven && (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: themeStyles.text }]}
            onPress={handleConsent}
          >
            <Text
              style={[styles.buttonText, { color: themeStyles.background }]}
            >
              I Agree
            </Text>
          </TouchableOpacity>
        )}
        {consentGiven && (
          <Text style={[styles.confirmation, { color: themeStyles.text }]}>
            ✔ Consent recorded
          </Text>
        )}
      </View>

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
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  intro: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    marginBottom: 16,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
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
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  link: {
    fontWeight: "600",
    color: "#6C63FF",
  },
  button: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  confirmation: {
    marginTop: 10,
    fontSize: 14,
    fontStyle: "italic",
  },
});
