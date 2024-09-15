import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, useColorScheme } from "react-native";
import MainContent from "../components/MainContent";
import DetailsCard from "../components/DetailsCard";
import { Theme } from "../theme/Theme";
import Input from "../components/Input";
import Button from "../components/Button";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { fetchData } from "../api/client";
import Toast from "react-native-toast-message";
import Loader from "../components/Loader";
import Errors from "../components/Errors";

const MisPaquetesScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme);
  const user = useSelector(state => state.login.user);
  const token = user.token;

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orden, setOrden] = useState(null);

  const [numeroSeguimiento, setNumeroSeguimientp] = useState("");

  const handleSeguimientoOrden = async () => {
    setLoading(true);
    try {
      const response = await fetchData('seguimiento-orden',
        { 'numero_seguimiento': numeroSeguimiento },
        {
          'Authorization': `Bearer ${user.token}`
        }
      );

      if (response.hasOwnProperty('id')) {
        Toast.show({
          type: 'success',
          text1: 'Proceso completado',
          text2: `Te mostramos los datos de orden encontrada!`
        });

        setOrden(response);

      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `No se encontro ninguna orden!!`
        });
      }

    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `No se encontro ninguna orden!!`
      });
      setErrors(error);
    } finally {
      setLoading(false);
    }
  };


  const orders = [
    { id: 1, title: "Orden 1", description: "Descripción de la orden 1", status: "Completada" },
    { id: 2, title: "Orden 2", description: "Descripción de la orden 2", status: "Pendiente" },
    // Agrega más órdenes aquí según tu estructura de datos
  ];

  return (
    <MainContent>
      <View style={styles.container}>

        {loading && <Loader />}

        <View style={styles.header}>
          <View style={styles.seguimientoImage}>
            <Icon name="archive" size={100} color="#4267B2" />
          </View>
          <Text style={styles.title}> Ingresa tu numero de seguimiento y reastrea tus paquetes!</Text>
        </View>

        <Input
          placeholder="Numero de seguimiento"
          onChangeText={(text) => setNumeroSeguimientp(text)}
          value={numeroSeguimiento}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button
          title="Buscar Orden"
          onPress={handleSeguimientoOrden}
          typeButton="primary"
        />

        {orden !== null ? (
          <>
            <DetailsCard
              title={orden.numero_seguimiento}
              description={
                [
                  {
                    'key': "Concepto",
                    'value': orden.concepto,
                  },
                  {
                    'key': "Pago",
                    'value': orden.estado_pago,
                  },
                  {
                    'key': "Monto",
                    'value': orden.total_pagar,
                  },
                ]
              }
              iconName="info-circle"
              typeCard="info"
              // statusText={item.status}
              onPress={() => {
                console.log("La tarjeta fue clickeada");
              }}
            />
          </>
        ) : (
          <></>
        )}

        {/* <FlatList
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
            <Text style={styles.noOrdersText}>No hay órdenes disponibles</Text>
          )}
        /> */}

        {errors && <Errors errors={errors} onClose={handleCloseErrors} />}
      </View>
    </MainContent>
  );
};

const getStyles = (colorScheme) => {
  const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      borderRadius: 15,
      backgroundColor: "#f5f5f5",
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
      paddingBottom: 20,
    },
    seguimientoImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      color: Theme.light.text,
      marginBottom: 20,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    noOrdersText: {
      color: "#555",
      textAlign: "center",
      marginTop: 20,
    },
  });

  const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      borderRadius: 15,
      backgroundColor: Theme.dark.primary,
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#444',
      paddingBottom: 20,
    },
    seguimientoImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      color: Theme.dark.text,
      marginBottom: 20,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    noOrdersText: {
      color: "#ddd",
      textAlign: "center",
      marginTop: 20,
    },
  });

  return colorScheme === 'dark' ? darkStyles : lightStyles;
};


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
