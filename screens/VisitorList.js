import React, { useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { firestore } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { ThemeContext } from "../context/ThemeContext";
import { useFocusEffect } from "@react-navigation/native"; // ✅ Importación clave
import { useCallback } from "react"; // Necesario para useFocusEffect

export default function VisitorList() {
  const [visitors, setVisitors] = useState([]);
  const { themeStyles } = useContext(ThemeContext);

  useFocusEffect(
    useCallback(() => {
      const fetchVisitors = async () => {
        try {
          const q = query(
            collection(firestore, "visitors"),
            orderBy("createdAt", "desc")
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setVisitors(data);
        } catch (error) {
          console.error("Error fetching visitors:", error);
        }
      };

      fetchVisitors();
    }, []) // Dependencias vacías = se ejecuta cada vez que entras a esta pantalla
  );

  const renderItem = ({ item }) => (
    <View style={[styles.item, { borderColor: themeStyles.text }]}>
      <Text style={[styles.name, { color: themeStyles.text }]}>
        {item.name}
      </Text>
      <Text style={{ color: themeStyles.text }}>📧 {item.email}</Text>
      <Text style={{ color: themeStyles.text }}>📱 {item.number}</Text>
      <Text style={{ color: themeStyles.text }}>📝 {item.reason}</Text>
    </View>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: themeStyles.background }]}
    >
      <Text style={[styles.title, { color: themeStyles.text }]}>
        Visitor Records
      </Text>
      <FlatList
        data={visitors}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
