import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Switch,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { ThemeContext } from "../context/ThemeContext";
import { ref, set, onValue } from "firebase/database";
import { realtimeDB, firestore, auth } from "../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function MainPage() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [destino, setDestino] = useState(null);
  const [nombreDestino, setNombreDestino] = useState("");
  const { themeStyles } = useContext(ThemeContext);
  const [verOtrosUsuarios, setVerOtrosUsuarios] = useState(false);
  const [usuariosConectados, setUsuariosConectados] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permiso de ubicación denegado");
        return;
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 2000,
          distanceInterval: 1,
        },
        (loc) => {
          setLocation(loc.coords);

          if (auth.currentUser) {
            const userRef = ref(
              realtimeDB,
              `locations/${auth.currentUser.uid}`
            );
            set(userRef, {
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
              timestamp: Date.now(),
              displayName: auth.currentUser.displayName || "Usuario",
            });
          }
        }
      );
    })();
  }, []);

  useEffect(() => {
    if (!verOtrosUsuarios) return;

    const locationsRef = ref(realtimeDB, "locations");
    const unsubscribe = onValue(locationsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const otros = Object.entries(data)
        .filter(([uid]) => uid !== auth.currentUser?.uid)
        .map(([uid, value]) => ({ uid, ...value }));
      setUsuariosConectados(otros);
    });

    return () => unsubscribe();
  }, [verOtrosUsuarios]);

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
  ];

  const region = {
    latitude: 21.8767,
    longitude: -102.2628,
    latitudeDelta: 0.0015,
    longitudeDelta: 0.0015,
  };

  const limpiarRuta = () => {
    setDestino(null);
    setNombreDestino("");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 8 }}>
        <Text style={{ marginRight: 10 }}>Ver otros usuarios:</Text>
        <Switch value={verOtrosUsuarios} onValueChange={setVerOtrosUsuarios} />
      </View>

      {location ? (
        <>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={region}
          >
            {ubicaciones.map((ubicacion, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: ubicacion.latitud,
                  longitude: ubicacion.longitud,
                }}
                title={ubicacion.nombre}
                onPress={() => {
                  setDestino({
                    latitude: ubicacion.latitud,
                    longitude: ubicacion.longitud,
                  });
                  setNombreDestino(ubicacion.nombre);
                }}
              />
            ))}

            {verOtrosUsuarios &&
              usuariosConectados.map((usuario) => (
                <Marker
                  key={usuario.uid}
                  coordinate={{
                    latitude: usuario.latitude,
                    longitude: usuario.longitude,
                  }}
                  pinColor="green"
                  title={usuario.displayName || "Otro usuario"}
                />
              ))}

            {location && destino && (
              <Polyline
                coordinates={[
                  {
                    latitude: location.latitude,
                    longitude: location.longitude,
                  },
                  destino,
                ]}
                strokeColor="#007bff"
                strokeWidth={4}
              />
            )}
          </MapView>

          {nombreDestino !== "" && (
            <View
              style={[
                styles.destinoInfo,
                { backgroundColor: themeStyles.background },
              ]}
            >
              <Text style={[styles.destinoTexto, { color: themeStyles.text }]}>
                Destino: {nombreDestino}
              </Text>
              <TouchableOpacity
                style={styles.botonLimpiar}
                onPress={limpiarRuta}
              >
                <Text style={styles.botonTexto}>Limpiar Ruta</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>{errorMsg || "Obteniendo ubicación..."}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  destinoInfo: {
    padding: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  destinoTexto: {
    fontSize: 16,
    marginBottom: 6,
  },
  botonLimpiar: {
    backgroundColor: "#ff5555",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  botonTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
