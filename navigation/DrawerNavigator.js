import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // o cualquier otra librería de iconos que prefieras
import MisPaquetesScreen from "../screens/MisPaquetesScreen";
import ProfileScreen from "../screens/auth/ProfileScreen";
import SeguimientoScreen from "../screens/SeguimientoScreen";
import TabNavigator from "./TabNavigator";
import RecoverPasswordScreen from "../screens/RecoverPasswordScreen"; // Importa el componente correcto

const Drawer = createDrawerNavigator();

const drawerIcons = {
  MrsPaquetes: "home",
  Profile: "user-circle",
  MisPaquetes: "archive",
  Seguimiento: "search",
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={require("../assets/Artboard.png")} style={styles.logo} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      drawerContentOptions={{
        activeTintColor: "#635bff",
        inactiveTintColor: "#FFFFFF",
        itemStyle: { marginVertical: 0 }, // Ajusta el margen vertical a 0 para eliminar cualquier espacio adicional
        labelStyle: { fontSize: 16 },
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#212734",
        },
        headerTintColor: "#FFFFFF",
        drawerStyle: {
          backgroundColor: "#212734",
        },
        drawerContentStyle: {
          backgroundColor: "#212734",
        },
        drawerActiveTintColor: "#635bff",
        drawerInactiveTintColor: "#FFFFFF",
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="Mrs Paquetes"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name={drawerIcons.MrsPaquetes} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name={drawerIcons.Profile} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mis Paquetes"
        component={MisPaquetesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name={drawerIcons.MisPaquetes} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Seguimiento"
        component={SeguimientoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name={drawerIcons.Seguimiento} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="RecoverPassword"
        component={RecoverPasswordScreen} // Usa el componente correcto aquí
        options={{ drawerLabel: () => null }} // Oculta la pantalla del menú de navegación
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#212734",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
});

export default DrawerNavigator;
