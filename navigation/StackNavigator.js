import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";
import DrawerNavigator from "./DrawerNavigator";
import RegisterScreen from "../screens/singup/RegisterScreen";
import ConfirmationEmailScreen from "../screens/singup/ConfirmationEmailScreen";
import CreateProfileScreen from "../screens/auth/CreateProfileScreen";
import UpdatePasswordScreen from "../screens/singin/UpdatePasswordScreen";
import RecoverPasswordScreen from "../screens/singin/RecoverPasswordScreen";


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
            <Stack.Screen name="ConfirmationEmailScreen" component={ConfirmationEmailScreen} />
            <Stack.Screen name="CreateProfileScreen" component={CreateProfileScreen} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator };