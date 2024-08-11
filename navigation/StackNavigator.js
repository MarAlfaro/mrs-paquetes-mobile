import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import DrawerNavigator from "./DrawerNavigator";
import RecoverPasswordScreen from "../screens/RecoverPasswordScreen";
import UpdatePasswordScreen from "../screens/UpdatePasswordScreen";
import RegisterScreen from "../screens/RegisterScreen";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator      
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: "#1F2A40",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={DrawerNavigator} />
            <Stack.Screen name="RecoverPasswordScreen" component={RecoverPasswordScreen} />
            <Stack.Screen name="UpdatePasswordScreen" component={UpdatePasswordScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator };