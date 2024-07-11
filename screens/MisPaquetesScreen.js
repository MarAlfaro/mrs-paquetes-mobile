import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import MainContent from "../components/MainContent";
import DetailsCard from "../components/DetailsCard";

const MisPaquetesScreen = ({ navigation }) => {
  const orders = [
    { id: 1, title: "Orden 1", description: "Descripción de la orden 1", status: "Completada" },
    { id: 2, title: "Orden 2", description: "Descripción de la orden 2", status: "Pendiente" },
    // Agrega más órdenes aquí según tu estructura de datos
  ];

  return (
    <MainContent>
      <View style={styles.container}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <DetailsCard
              title={item.title}
              description={item.description}
              iconName="info-circle"
              typeCard={getStatusType(item.status)}
              statusText={item.status}
              onPress={() => {
                console.log("La tarjeta fue clickeada");
              }}
            />
          )}
          ListEmptyComponent={() => (
            <Text>No hay órdenes disponibles</Text>
          )}
        />
      </View>
    </MainContent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
});

const getStatusType = (status) => {
  switch (status) {
    case "Completada":
      return "success";
    case "Pendiente":
      return "warning";
    default:
      return "info";
  }
};

export default MisPaquetesScreen;
