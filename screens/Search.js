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
      nombre: "Polímeros",
      latitud: 21.876184619668194,
      longitud: -102.26357381749365,
    },
    {
      nombre: "Química, Fisico-Química",
      latitud: 21.87610994765854,
      longitud: -102.26337265180668,
    },
    {
      nombre: "Departamento de Sistemas y Computación",
      latitud: 21.876119802818625,
      longitud: -102.26230300846699,
    },
    {
      nombre: "Metodos",
      latitud: 21.876468372948512,
      longitud: -102.26258944673198,
    },
    {
      nombre: "Analisis Industriales y Cuantitativo",
      latitud: 21.876256802573717,
      longitud: -102.26231049697935,
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
      nombre: "Educación a Distancia, Aula Isóptica, Centro de Idiomas",
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
      nombre: "Electrónica",
      latitud: 21.876777019393575,
      longitud: -102.2606667022069,
    },
    {
      nombre: "Centro de cómputo",
      latitud: 21.876857441051413,
      longitud: -102.26102044482181,
    },
    {
      nombre: "Centro de Computo",
      latitud: 21.876816841120682,
      longitud: -102.26112227841256,
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
      nombre:
        "Sala Isóptica de Posgrado, Departamento De Posgrado Y Cuerpos Académicos",
      latitud: 21.877488887633685,
      longitud: -102.26054868497796,
    },
    {
      nombre: "Aula magna",
      latitud: 21.87762780137996,
      longitud: -102.26058458585668,
    },
    {
      nombre: "Pesas y Vestidores",
      latitud: 21.876184622814637,
      longitud: -102.26078740166857,
    },
    {
      nombre: "Alberca Semi-Olimpica",
      latitud: 21.876037767825906,
      longitud: -102.26061037582744,
    },
    {
      nombre: "Gimnasio Auditorio",
      latitud: 21.87560466918032,
      longitud: -102.26069352431139,
    },
    {
      nombre: "Estadio Olímpico Rafael Macario Carlos",
      latitud: 21.876006399536085,
      longitud: -102.2597779174717,
    },
    {
      nombre: "Campo de Futbol, Pista de Atletismo",
      latitud: 21.876197068146514,
      longitud: -102.2597574333146,
    },
    {
      nombre: "Campo de Beisbol",
      latitud: 21.875756502762453,
      longitud: -102.25881329572691,
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
      nombre: "Redes",
      latitud: 21.87574156516194,
      longitud: -102.26176332633815,
    },
    {
      nombre: "Unidad Académica De Ing. Industrial",
      latitud: 21.874521693078133,
      longitud: -102.25887383149015,
    },
    {
      nombre: "Investigación",
      latitud: 21.877887134066007,
      longitud: -102.26217410374069,
    },
    {
      nombre: "Manufactura y Ambiental",
      latitud: 21.877919491538663,
      longitud: -102.26272663882762,
    },
    {
      nombre: "Ing. Electrica",
      latitud: 21.87672474604115,
      longitud: -102.26355504202954,
    },
    {
      nombre: "Ing. Mecanica",
      latitud: 21.876426058898648,
      longitud: -102.26357113528451,
    },
    {
      nombre: "Multifuncional",
      latitud: 21.87496995009764,
      longitud: -102.26000916166734,
    },
    {
      nombre: "Modulo de Aulas 1 a la 6",
      latitud: 21.878205727248027,
      longitud: -102.26227026387924,
    },
    {
      nombre: "Modulo de Aulas 7 a la 9",
      latitud: 21.878056385304948,
      longitud: -102.26159971158928,
    },
    {
      nombre: "Modulo de Aulas 10 a la 15",
      latitud: 21.877787569413524,
      longitud: -102.26137977043818,
    },
    {
      nombre: "Modulo de Aulas 16 a la 29",
      latitud: 21.877215089428745,
      longitud: -102.26063948077123,
    },
    {
      nombre: "Modulo de Aulas 30 a la 35",
      latitud: 21.8762493353805,
      longitud: -102.26285498546358,
    },
    {
      nombre: "Modulo de Aulas 36 a la 38",
      latitud: 21.87597553794491,
      longitud: -102.26287107871853,
    },
    {
      nombre: "Modulo de Aulas 40 a la 43",
      latitud: 21.875776412200256,
      longitud: -102.26217906876983,
    },
    {
      nombre: "Modulo de Aulas 44 y 45",
      latitud: 21.87593322374192,
      longitud: -102.26197253866452,
    },
    {
      nombre: "Modulo de Aulas 46 a la 52",
      latitud: 21.876229422850443,
      longitud: -102.26174991530425,
    },
    {
      nombre: "Modulo de Aulas 54 a la 57",
      latitud: 21.87607261163428,
      longitud: -102.26122420230891,
    },
    {
      nombre: "Modulo de Aulas 58 a la 61",
      latitud: 21.87627173695863,
      longitud: -102.26129125753793,
    },
    {
      nombre: "Modulo de Aulas 62 a la 82",
      latitud: 21.874716062943595,
      longitud: -102.25907575292626,
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
