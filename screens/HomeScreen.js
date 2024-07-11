import React from "react";
import {  StyleSheet, View } from "react-native";
import MainContent from "../components/MainContent";
import DetailsCard from "../components/DetailsCard";

const HomeScreen = ({ navigation }) => {
  return (
    <MainContent>
      <View style={styles.container}>
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
          description="Destalles de entregas pendientes"
          iconName="info-circle"
          typeCard="warning"
          statusText="10"
        />

        <DetailsCard
          title="Número de clientes"
          description="Detalles de numero de clientes"
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
  }
});

export default HomeScreen;