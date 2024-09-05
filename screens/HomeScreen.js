import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/client";
import MainContent from "../components/MainContent";
import DetailsCard from "../components/DetailsCard";
import { Theme } from "../theme/Theme";
import { checkProfile } from "../redux/slice/profileSlice";
import Button from "../components/Button";
import Toast from "react-native-toast-message";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.login.user);
  const hasProfile = useSelector(state => state.profile.hasProfile);
  const userName = user.user.name || "Usuario";
  const role = user.role || "default";
  const token = user.token;

  const roleMessage = {
    cliente: `Hola, ${userName}. Cliente puedes ver y gestionar tus paquetes.`,
  };

  const welcomeMessage = roleMessage[role];

  useEffect(() => {
    //Verficar si el profile esta creado
    const getProfileStatus = async () => {
      try {
        const response = await fetchData("verificar-perfil", {}, { Authorization: `Bearer ${token}` });

        dispatch(checkProfile({
          status: response
        }))

        console.log(hasProfile)

      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `Formato al verficar el perfil.!!`
        });
      }
    };
    getProfileStatus();
  }, [token]);

  const handleProfile = () => {
    navigation.navigate("CreateProfileScreen");
  };

  return (
    <MainContent>
      <View style={styles.container}>

        {hasProfile ? (

          <>
            <Text style={styles.welcomeMessage}>{welcomeMessage}</Text>

            <DetailsCard
              title="Paquetes"
              description="Detalles de tus paquetes"
              iconName="envelope"
              typeCard="info"
              statusText={`${0} Paquetes`}
              onPress={() => {
                console.log("Paquetes clickeados");
              }}
            />

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
          </>

        ) : (
          <>
            <View style={styles.continerNotProfile}>
              <Text style={styles.title}>Para seguir usando a Mr. Paquetes! crea tu perfil </Text>
              <Button
                title="Crear Perfil"
                onPress={handleProfile}
                typeButton="primary"
              />
            </View>
          </>
        )}

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
    padding: 10,
  },
  continerNotProfile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    marginTop: 50,
    marginBottom: 40,
    backgroundColor: Theme.light.surface,
    borderRadius: 15,
    $dark: {
      backgroundColor: Theme.dark.primary
    }
  },
  title: {
    color: Theme.light.text,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    $dark: {
      color: Theme.dark.text
    }
  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.light.text,
    marginBottom: 20,
    textAlign: 'center',
    $dark: {
      color: Theme.dark.text
    }
  },
});

export default HomeScreen;
