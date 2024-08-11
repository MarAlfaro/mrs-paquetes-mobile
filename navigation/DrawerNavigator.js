import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import MisPaquetesScreen from "../screens/MisPaquetesScreen";
import ProfileScreen from "../screens/auth/ProfileScreen";
import SeguimientoScreen from "../screens/SeguimientoScreen";
import TabNavigator from "./TabNavigator";
import RecoverPasswordScreen from "../screens/RecoverPasswordScreen";
import Icon from "react-native-vector-icons/FontAwesome"; 
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const drawerIcons = {
  MrsPaquetes: "home",
  Profile: "user-circle",
  MisPaquetes: "archive",
  Seguimiento: "search",
};

const DrawerNavigator = () => {
  const user = useSelector((state) => state.login.user);
  const role = user.role || "default";

  const getDrawerScreens = () => {
    switch (role) {
      case 'admin':
        return (
          <>
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
              name="Seguimiento"
              component={SeguimientoScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Icon name={drawerIcons.Seguimiento} color={color} size={size} />
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
              name="Perfil"
              component={ProfileScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Icon name={drawerIcons.Profile} color={color} size={size} />
                ),
              }}
            />
          </>
        );
      case 'cliente':
        return (
          <>
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
              name="Seguimiento"
              component={SeguimientoScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Icon name={drawerIcons.Seguimiento} color={color} size={size} />
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
              name="Perfil"
              component={ProfileScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Icon name={drawerIcons.Profile} color={color} size={size} />
                ),
              }}
            />
          </>
        );
      case 'conductor':
        return (
          <>
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
              name="Mis Paquetes"
              component={MisPaquetesScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Icon name={drawerIcons.MisPaquetes} color={color} size={size} />
                ),
              }}
            />
          </>
        );
      default:
        return (
          <Drawer.Screen
              name="Mrs Paquetes"
              component={TabNavigator}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Icon name={drawerIcons.MrsPaquetes} color={color} size={size} />
                ),
              }}
            />
        );
    }
  };

  return (
<Drawer.Navigator
  drawerContent={(props) => <CustomDrawerContent {...props} />}
  screenOptions={{
    headerStyle: {
      backgroundColor: "rgb(18, 22, 33)",
    },
    headerTintColor: "#FFFFFF",
    drawerStyle: {
      backgroundColor: "rgb(18, 22, 33)",
    },
    drawerContentStyle: {
      backgroundColor: "rgb(18, 22, 33)",
    },
    drawerActiveTintColor: "#635bff",
    drawerInactiveTintColor: "#FFFFFF",
    drawerLabelStyle: { fontSize: 16 },
  }}
>
  {getDrawerScreens()}
  <Drawer.Screen
    name="RecoverPassword"
    component={RecoverPasswordScreen}
    options={{
      drawerLabel: "Cambiar Contraseña",
      drawerIcon: ({ color, size }) => (
        <Icon name="key" color={color} size={size} />
      ),
    }}
  />
</Drawer.Navigator>

  );
};

export default DrawerNavigator;
