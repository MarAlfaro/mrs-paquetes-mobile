import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";
import DrawerNavigator from "./DrawerNavigator";

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
        </Stack.Navigator>
    );
}

export { MainStackNavigator };