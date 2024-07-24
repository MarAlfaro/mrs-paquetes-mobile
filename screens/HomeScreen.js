import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import MainContent from "../components/MainContent";
import DetailsCard from "../components/DetailsCard";

const HomeScreen = ({ navigation }) => {
  // Obtén el nombre y rol del usuario desde el estado de Redux
  const user = useSelector(state => state.login.user);
  const userName = user.user.name || "Usuario";
  const role = user.role || "default";

  // Mensaje basado en el rol del usuario
  const roleMessage = {
    admin: `Bienvenido, ${userName}. Tienes acceso completo.`,
    cliente: `Hola, ${userName}. Puedes ver y gestionar tus paquetes.`,
    conductor: `Hola, ${userName}. Aquí está la información de tus entregas.`,
    default: `Bienvenido a tu perfil, ${userName}.`
  };

  // Mensaje personalizado basado en el rol
  const welcomeMessage = roleMessage[role];

  return (
    <MainContent>
      <View style={styles.container}>
        {/* Muestra el mensaje personalizado */}
        <Text style={styles.welcomeMessage}>{welcomeMessage}</Text>

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
