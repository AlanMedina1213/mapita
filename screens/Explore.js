import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext";

const imagenes = {
  desarrollo: require("../assets/imagenes_ubicaciones/DesarrolloAcademico.jpg"),
  quimica: require("../assets/imagenes_ubicaciones/IngenieriaQuimica.jpg"),
  sistemas: require("../assets/imagenes_ubicaciones/SistemasComputacion.jpg"),
  cafeteria: require("../assets/imagenes_ubicaciones/Cafeteria.jpg"),
  distancia: require("../assets/imagenes_ubicaciones/EducacionDistancia.jpg"),
  computo: require("../assets/imagenes_ubicaciones/CentroComputo.jpg"),
  industrial: require("../assets/imagenes_ubicaciones/IngenieriaIndustrial.jpg"),
  ciia: require("../assets/imagenes_ubicaciones/CIIA.jpg"),
  posgrados: require("../assets/imagenes_ubicaciones/DepartamentoPosgrados.jpeg"),
  alberca: require("../assets/imagenes_ubicaciones/AreaAlberca.jpg"),
  auditorio: require("../assets/imagenes_ubicaciones/Auditorio.jpg"),
};

const ubicacionesPopulares = [
  {
    nombre: "Desarrollo Académico - TecNM ITA",
    latitud: 21.87729062086366,
    longitud: -102.26367300020553,
    imagen: imagenes.desarrollo,
  },
  {
    nombre: "Departamento de Ing. Química",
    latitud: 21.876687145624373,
    longitud: -102.26310699275673,
    imagen: imagenes.quimica,
  },
  {
    nombre: "Departamento de Sistemas y Computación",
    latitud: 21.876119802818625,
    longitud: -102.26230300846699,
    imagen: imagenes.sistemas,
  },
  {
    nombre: "Cafetería ITA",
    latitud: 21.876563104552247,
    longitud: -102.26217824809505,
    imagen: imagenes.cafeteria,
  },
  {
    nombre: "Educación a Distancia",
    latitud: 21.87712602355661,
    longitud: -102.26150145327857,
    imagen: imagenes.distancia,
  },
  {
    nombre: "Centro de Cómputo",
    latitud: 21.876857441051413,
    longitud: -102.26102044482181,
    imagen: imagenes.computo,
  },
  {
    nombre: "Unidad Académica De Ing. Industrial",
    latitud: 21.874521693078133,
    longitud: -102.25887383149015,
    imagen: imagenes.industrial,
  },
  {
   nombre: 'Sala Isóptica de Posgrado, Departamento De Posgrado Y Cuerpos Académicos',
   latitud: 21.877488887633685,
   longitud: -102.26054868497796,
   imagen: imagenes.posgrados,
  },
  {
   nombre: 'Gimnasio Auditorio',
   latitud: 21.87560466918032,
   longitud: -102.26069352431139,
   imagen: imagenes.auditorio,
  },
  {
   nombre: 'Alberca Semi-Olimpica',
   latitud: 21.876037767825906,
   longitud: -102.26061037582744,
   imagen: imagenes.alberca,
  },
];

export default function Explore() {
  const navigation = useNavigation();
  const { themeStyles } = useContext(ThemeContext); 

  const irAMainPage = (ubicacion) => {
    navigation.navigate("MainPage", { destino: ubicacion });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: themeStyles.background }]}
    >
      <FlatList
        data={ubicacionesPopulares}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
            <Image source={item.imagen} style={styles.imagen} />
            <Text style={[styles.titulo, { color: themeStyles.text }]}>
              {item.nombre}
            </Text>
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: themeStyles.button }]}
              onPress={() => irAMainPage(item)}
            >
              <Text
                style={[styles.botonTexto, { color: themeStyles.buttonText }]}
              >
                Ver en el mapa
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },
  imagen: {
    width: "100%",
    height: 150,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  boton: {
    padding: 10,
    alignItems: "center",
  },
  botonTexto: {
    fontWeight: "bold",
  },
});
