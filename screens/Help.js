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
  Linking,
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
    LayoutAnimation.configureNext(
      LayoutAnimation.create(200, "easeInEaseOut", "opacity")
    );
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I create an account?",
      answer:
        "Go to the Profile tab and tap 'Sign Up.' Fill in your details and confirm your email to get started.",
    },
    {
      question: "Can I use the app offline?",
      answer:
        "Currently, offline mode is not supported. A stable internet connection is required to access maps and search features.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "On the login screen, tap 'Forgot Password?' and follow the instructions to reset it via email.",
    },
    {
      question: "How do I report a bug or problem?",
      answer:
        "You can report issues directly via the 'Support' section or by emailing us at medinajuarez180@gmail.com.",
    },
  ];

  const renderBullet = (text) => (
    <View style={styles.bulletRow}>
      <Icon name="circle-small" size={20} color={themeStyles.text} />
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        {text}
      </Text>
    </View>
  );

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I need help with MapITA");
    const phoneNumber = "524494187446";
    Linking.openURL(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  return (
    <ScrollView
      style={{ backgroundColor: themeStyles.background }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/help-icon.png")}
          style={styles.titleImage}
        />
        <Text style={[styles.title, { color: themeStyles.text }]}>
          Help Center
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
        <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
          Introduction
        </Text>
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          Welcome to the Help Center. This section provides answers to your
          questions and guidance for using the app effectively.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
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
      </View>

      <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
        <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
          Step-by-Step Guides
        </Text>
        {renderBullet(
          "Go to the Explore tab and use filters to find nearby places."
        )}
        {renderBullet("Use the Search tab to look up specific locations.")}
        {renderBullet(
          "Edit your profile in the Profile tab by tapping 'Edit Profile.'"
        )}
      </View>

      <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
        <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
          Troubleshooting
        </Text>
        {renderBullet("Check your internet connection.")}
        {renderBullet("Close and reopen the app.")}
        {renderBullet("Make sure the app is up to date.")}
        {renderBullet("Contact our support team if the issue continues.")}
      </View>

      <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
        <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
          Contact or Support
        </Text>
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          Email:{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("mailto:medinajuarez@gmail.com")}
          >
            medinajuarez@gmail.com
          </Text>
          {"\n"}Phone:{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("tel:4494187446")}
          >
            (449) 418 7446
          </Text>
          {"\n"}Available Monday to Friday, 9am–5pm.
        </Text>
        <Text style={[styles.link, { marginTop: 10 }]} onPress={openWhatsApp}>
          💬 Contact via WhatsApp
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
        <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
          Video Tutorials
        </Text>
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          We’re working on video tutorials to help you learn each feature of the
          app. Stay tuned!
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
        <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>
          Glossary
        </Text>
        <Text style={[styles.paragraph, { color: themeStyles.text }]}>
          <Text style={styles.bold}>Pin:</Text> A marker on the map for a point
          of interest.{"\n"}
          <Text style={styles.bold}>Explore:</Text> Lets you discover locations.
          {"\n"}
          <Text style={styles.bold}>Profile:</Text> Your personal area for
          settings.{"\n"}
          <Text style={styles.bold}>Dark Mode:</Text> Reduces screen brightness
          for eye comfort.
        </Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  titleImage: {
    width: 34,
    height: 34,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 5,
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
  link: {
    color: "#6C63FF",
    fontWeight: "600",
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  bold: {
    fontWeight: "bold",
  },
});
