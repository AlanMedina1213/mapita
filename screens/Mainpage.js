import React, { useEffect, useState, useContext, useRef } from "react";
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
import { realtimeDB, auth } from "../firebaseConfig";
import { useRoute } from "@react-navigation/native";

export default function MainPage() {
  const route = useRoute();
  const mapRef = useRef(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [destino, setDestino] = useState(null);
  const [nombreDestino, setNombreDestino] = useState("");
  const { themeStyles } = useContext(ThemeContext);
  const [verOtrosUsuarios, setVerOtrosUsuarios] = useState(false);
  const [usuariosConectados, setUsuariosConectados] = useState([]);

  const regionITA = {
    latitude: 21.8767,
    longitude: -102.2628,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  useEffect(() => {
    if (route.params?.destino) {
      const { latitud, longitud, nombre } = route.params.destino;
      const nuevaRegion = {
        latitude: latitud,
        longitude: longitud,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      };

      setDestino({ latitude: latitud, longitude: longitud });
      setNombreDestino(nombre);

      if (mapRef.current) {
        mapRef.current.animateToRegion(nuevaRegion, 1000);
      }
    }
  }, [route.params]);

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

  const limpiarRuta = () => {
    setDestino(null);
    setNombreDestino("");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: themeStyles.background }]}
    >
      <View style={{ flexDirection: "row", alignItems: "center", padding: 8 }}>
        <Text style={{ marginRight: 10, color: themeStyles.text }}>
          Ver otros usuarios:
        </Text>
        <Switch value={verOtrosUsuarios} onValueChange={setVerOtrosUsuarios} />
      </View>

      {location ? (
        <>
          <MapView
            ref={mapRef} 
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={regionITA}
            onRegionChangeComplete={(reg) => {
              const maxLat = 21.8795;
              const minLat = 21.8735;
              const maxLng = -102.2575;
              const minLng = -102.265;

              if (
                reg.latitude < minLat ||
                reg.latitude > maxLat ||
                reg.longitude < minLng ||
                reg.longitude > maxLng
              ) {
                setLocation(regionITA);
              }
            }}
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
          <Text style={{ marginTop: 10, color: themeStyles.text }}>
            Obteniendo ubicación...
          </Text>
          {errorMsg && (
            <Text style={{ marginTop: 10, color: "red" }}>{errorMsg}</Text>
          )}
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
  destinoInfo: {
    padding: 10,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  destinoTexto: {
    fontSize: 16,
    fontWeight: "bold",
  },
  botonLimpiar: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#007bff",
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  botonTexto: {
    color: "white",
    fontSize: 14,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
