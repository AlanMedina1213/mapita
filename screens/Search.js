// screens/Search.js
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext";

const ubicaciones = [
  {
    nombre: "Desarrollo Académico - TecNM ITA",
    latitud: 21.87729062086366,
    longitud: -102.26367300020553,
  },
  {
    nombre: "Departamento de Ing. Química",
    latitud: 21.876687145624373,
    longitud: -102.26310699275673,
  },
  {
    nombre: "Laboratorio de Polímeros",
    latitud: 21.87630974362886,
    longitud: -102.26361909343142,
  },
  {
    nombre: "Laboratorio de Fisicoquímica",
    latitud: 21.876010798140147,
    longitud: -102.26333307902911,
  },
  {
    nombre: "Departamento de Sistemas y Computación",
    latitud: 21.876119802818625,
    longitud: -102.26230300846699,
  },
  {
    nombre: "Cafetería ITA",
    latitud: 21.876563104552247,
    longitud: -102.26217824809505,
  },
  {
    nombre: "Patio Cívico, Asta Bandera",
    latitud: 21.877065755189438,
    longitud: -102.26226965431533,
  },
  {
    nombre: "Educación a Distancia",
    latitud: 21.87712602355661,
    longitud: -102.26150145327857,
  },

  {
    nombre: "Oficina Sindicato",
    latitud: 21.877350442801532,
    longitud: -102.26145972378711,
  },
  {
    nombre: "Aula Isóptica",
    latitud: 21.87723594663953,
    longitud: -102.261419490652,
  },
  {
    nombre: "Electrónica Jefatura y oficinas",
    latitud: 21.877347953755507,
    longitud: -102.26109762557122,
  },
  {
    nombre: "Salón Profesor Javier Marchán",
    latitud: 21.878369336928703,
    longitud: -102.26206918968005,
  },
  {
    nombre: "Centro de cómputo",
    latitud: 21.876857441051413,
    longitud: -102.26102044482181,
  },
  {
    nombre: "Electrónica Laboratorios",
    latitud: 21.876811393530147,
    longitud: -102.26065700550063,
  },
  {
    nombre: "Unidad de Cuerpos Académicos",
    latitud: 21.87709390104293,
    longitud: -102.26035123367313,
  },
  {
    nombre: "Departamento De Posgrado Y Cuerpos Académicos",
    latitud: 21.87738263060951,
    longitud: -102.26045718092878,
  },
  {
    nombre: "DEPI oficinas",
    latitud: 21.877441123168097,
    longitud: -102.26037805576289,
  },
  {
    nombre: "Sala Isóptica de Posgrado",
    latitud: 21.87754815204049,
    longitud: -102.26068248648542,
  },
  {
    nombre: "Aula magna",
    latitud: 21.87762780137996,
    longitud: -102.26058458585668,
  },
  {
    nombre: "Alberca SemiOlimpica ITA 'Eric Moussambani'",
    latitud: 21.876106532117586,
    longitud: -102.26057882147049,
  },
  {
    nombre: "Gimnasio - Auditorio",
    latitud: 21.875814066363215,
    longitud: -102.26071561412982,
  },
  {
    nombre: "Estadio Olímpico Rafael Macario Carlos",
    latitud: 21.876006399536085,
    longitud: -102.2597779174717,
  },
  {
    nombre: "Estadio de Béisbol ITA 'Gonzalo Villalobos Félix'",
    latitud: 21.875373066198154,
    longitud: -102.25903716640603,
  },
  {
    nombre: "Cancha Fútbol 7 ITA 'Piojo Álvarado'",
    latitud: 21.875580904267945,
    longitud: -102.25798574047548,
  },
  {
    nombre: "Centro de Innovación Aeroespacial del Bajío",
    latitud: 21.874842422584436,
    longitud: -102.25999472112467,
  },
  {
    nombre: "El Olimpo",
    latitud: 21.874780558758943,
    longitud: -102.25935126469332,
  },
  {
    nombre: "Unidad Académica De Ing. Industrial",
    latitud: 21.874521693078133,
    longitud: -102.25887383149015,
  },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const navigation = useNavigation();
  const { themeStyles } = useContext(ThemeContext);

  const filtradas = ubicaciones.filter((item) =>
    item.nombre.toLowerCase().includes(query.toLowerCase())
  );

  const irAMainPage = (ubicacion) => {
    navigation.navigate("MainPage", { destino: ubicacion });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: themeStyles.background }]}
    >
      <Text style={[styles.titulo, { color: themeStyles.text }]}>
        Busca una ubicación
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: themeStyles.inputBackground,
            color: themeStyles.text,
            borderColor: themeStyles.borderColor,
          },
        ]}
        placeholder="Ej. cafetería, sistemas, industrial..."
        placeholderTextColor={themeStyles.text + "88"}
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtradas}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => irAMainPage(item)}
          >
            <Text style={[styles.itemText, { color: themeStyles.text }]}>
              {item.nombre}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={[styles.noResults, { color: themeStyles.text }]}>
            No se encontraron coincidencias.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
  },
  noResults: {
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },
});
