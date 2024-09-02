import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useSelector } from "react-redux";
import MisPaquetesScreen from "../screens/MisPaquetesScreen";

import ProfileScreen from "../screens/auth/ProfileScreen";
import SeguimientoScreen from "../screens/SeguimientoScreen";
import TabNavigator from "./TabNavigator";
import RecoverPasswordScreen from "../screens/RecoverPasswordScreen"; // Importa el componente correcto
import UpdatePasswordScreen from "../screens/UpdatePasswordScreen"; 
import Icon from "react-native-vector-icons/FontAwesome"; // o cualquier otra librería de iconos que prefieras
import CustomDrawerContent from "./CustomDrawerContent";
import { Theme } from "../theme/Theme";

const Drawer = createDrawerNavigator();

const drawerIcons = {
  MrsPaquetes: "home",
  Profile: "user-circle",
  MisPaquetes: "archive",
  Seguimiento: "search",
};

const DrawerNavigator = () => {
  const user = useSelector((state) => state.login.user);
  const hasProfile = useSelector(state => state.profile.hasProfile);
  const role = user.role || "default";

  const getDrawerScreens = () => {

      if (hasProfile) {
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
      } 
     
      return (
        <Drawer.Screen
            name="Mrs Paquetes"
            component={TabNavigator}
            options={{
              drawerIcon: ({color, size }) => (
                <Icon name={drawerIcons.MrsPaquetes} color={color} size={size} />
              ),
            }}
          />
      );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.dark.primaryDark,
        },
        headerTintColor: "#FFFFFF",
        drawerStyle: {
          backgroundColor:  Theme.dark.primary,
        },
        drawerContentStyle: {
          backgroundColor:  Theme.dark.primaryDark,
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
      <Drawer.Screen
        name="UpdatePassword"
        component={UpdatePasswordScreen}
        options={{ drawerLabel: () => null }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
