import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { useSelector } from "react-redux";
import { fetchData } from "../api/client";
import MainContent from "../components/MainContent";
import DetailsCard from "../components/DetailsCard";

const HomeScreen = ({ navigation }) => {
  const [rutas, setRutas] = useState({ total: 0, data: [] });
  const [vehiculos, setVehiculos] = useState({ total: 0, data: [] });
  const [asignacionRutas, setAsignacionRutas] = useState({ total: 0, data: [] });
  const [paquetes, setPaquetes] = useState({ total: 0, data: [] });
  const user = useSelector(state => state.login.user);
  const userName = user.user.name || "Usuario";
  const role = user.role || "default";
  const token = user.token;

  const roleMessage = {
    admin: `Bienvenido, ${userName}. Tienes acceso completo.`,
    cliente: `Hola, ${userName}. Cliente puedes ver y gestionar tus paquetes.`,
    conductor: `Hola, ${userName}.Conductor aquí está la información de tus entregas.`,
    default: `Bienvenido a tu perfil, ${userName}.`
  };

  const welcomeMessage = roleMessage[role];

  useEffect(() => {
    const fetchDataSafely = async (endpoint, setter) => {
      try {
        const headers = { 'Authorization': `Bearer ${token}` };
        const response = await fetchData(endpoint, {}, headers);

        if (response && typeof response === 'object') {
          // Manejo especial para asignacionrutas
          if (endpoint === 'asignacionrutas') {
            const asignacionrutasData = response.asignacionrutas;
            if (asignacionrutasData) {
              const total = asignacionrutasData.total || asignacionrutasData.length || 0;
              const data = asignacionrutasData.data || asignacionrutasData;
              setter({ total, data });
            } else {
              console.error("Datos de asignacionrutas no encontrados en la respuesta");
              setter({ total: 0, data: [] });
            }
          } else {
            const total = response.total || (Array.isArray(response.data) ? response.data.length : 0);
            const data = response.data || [];
            setter({ total, data });
          }
        } else {
          console.error(`Respuesta inválida para ${endpoint}:`, response);
          setter({ total: 0, data: [] });
        }
      } catch (error) {
        console.error(`Error al obtener ${endpoint}:`, error);
        setter({ total: 0, data: [] });
        if (error.response && error.response.status === 403) {
          Alert.alert("Error de permisos", `No tienes permiso para ver ${endpoint}.`);
        }
      }
    };

    const fetchDataForRole = async () => {
      try {
        if (role === 'admin') {
          await fetchDataSafely('rutas', setRutas);
          await fetchDataSafely('vehiculo', setVehiculos);
          await fetchDataSafely('asignacionrutas', setAsignacionRutas);
          await fetchDataSafely('paquete', setPaquetes);
        } else if (role === 'conductor') {
          await fetchDataSafely('rutas', setRutas);
          await fetchDataSafely('vehiculo', setVehiculos);
          await fetchDataSafely('asignacionrutas', setAsignacionRutas);
          await fetchDataSafely('paquete', setPaquetes);
        } else if (role === 'cliente') {
          await fetchDataSafely('paquete', setPaquetes);
          // No se obtienen los datos de rutas, vehículos, o asignación de rutas
          setRutas({ total: 0, data: [] });
          setVehiculos({ total: 0, data: [] });
          setAsignacionRutas({ total: 0, data: [] });
        }

        // Solo mostramos los datos relevantes en la consola
        console.log('Datos obtenidos:', {
          rutas: role === 'admin' || role === 'conductor' ? rutas : { total: 0, data: [] },
          vehiculos: role === 'admin' || role === 'conductor' ? vehiculos : { total: 0, data: [] },
          asignacionRutas: role === 'admin' || role === 'conductor' ? asignacionRutas : { total: 0, data: [] },
          paquetes: role === 'admin' || role === 'conductor' || role === 'cliente' ? paquetes : { total: 0, data: [] }
        });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        Alert.alert("Error", "Hubo un problema al cargar los datos. Por favor, intenta de nuevo más tarde.");
      }
    };

    fetchDataForRole();
  }, [role, token]);

  return (
    <MainContent>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>{welcomeMessage}</Text>

        {role === 'conductor' || role === 'admin' ? (
          <>
            <DetailsCard
              title="Vehículos"
              description="Detalles de los vehículos"
              iconName="truck"
              typeCard="primary"
              statusText={`${vehiculos.total} Vehículos`}
              onPress={() => {
                console.log("Vehículos clickeados");
              }}
            />

            <DetailsCard
              title="Rutas"
              description="Detalles de las rutas"
              iconName="map"
              typeCard="info"
              statusText={`${rutas.total} Rutas`}
              onPress={() => {
                console.log("Rutas clickeadas");
              }}
            />

            <DetailsCard
              title="Asignación de Rutas"
              description="Detalles de asignación de rutas"
              iconName="arrow-right"
              typeCard="success"
              statusText={`${asignacionRutas.total} Asignaciones`}
              onPress={() => {
                console.log("Asignación de rutas clickeada");
              }}
            />

            <DetailsCard
              title="Paquetes"
              description="Detalles de todos los paquetes"
              iconName="envelope"
              typeCard="info"
              statusText={`${paquetes.total} Paquetes`}
              onPress={() => {
                console.log("Paquetes clickeados");
              }}
            />
          </>
        ) : null}

        {role === 'cliente' && (
          <DetailsCard
            title="Paquetes"
            description="Detalles de tus paquetes"
            iconName="envelope"
            typeCard="info"
            statusText={`${paquetes.total} Paquetes`}
            onPress={() => {
              console.log("Paquetes clickeados");
            }}
          />
        )}

        <DetailsCard
          title="Número de entregas"
          description="Detalles del número de entregas"
          iconName="info-circle"
          typeCard="primary"
          statusText="100"
          onPress={() => {
            console.log("La tarjeta fue clickeada");
          }}
        />

        <DetailsCard
          title="Entregas completadas"
          description="Detalles de entregas completadas"
          iconName="info-circle"
          typeCard="success"
          statusText="10"
        />

        <DetailsCard
          title="Entregas pendientes"
          description="Detalles de entregas pendientes"
          iconName="info-circle"
          typeCard="warning"
          statusText="10"
        />

        <DetailsCard
          title="Número de clientes"
          description="Detalles de número de clientes"
          iconName="info-circle"
          typeCard="info"
          statusText="10000"
        />

        <DetailsCard
          title="Entregas retrasadas"
          description="Detalle de entregas retrasadas"
          iconName="info-circle"
          typeCard="danger"
          statusText="10"
        />
      </View>
    </MainContent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
