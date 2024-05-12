import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/auth/ProfileScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121621",
        },
        headerTintColor: "#FFFFFF", // Color del texto e icono en el header
        drawerStyle: {
          backgroundColor: '#121621', // Color de fondo del drawer
        },
        drawerContentStyle: {
          backgroundColor: '#121621', // Color de fondo del contenido del drawer
        },
        drawerActiveTintColor: '#635bff', // Color del ícono y texto de la opción activa
        drawerInactiveTintColor: '#FFFFFF', // Color del ícono y texto de las opciones inactivas
        drawerItemStyle: { marginVertical: 5 }, // Estilo del elemento del menú
        drawerLabelStyle: { fontSize: 16 }, // Estilo del texto de las opciones
      }}
    >
      <Drawer.Screen name="Mrs Paquetes" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;