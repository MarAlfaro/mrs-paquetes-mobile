import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#635bff"
      inactiveColor="#FFFFFF"
      barStyle={{ 
        backgroundColor: '#121621' 
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Dashboard"
        component={HomeScreen}
        options={
          {
            tabBarName: 'Dashboard',
            tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="view-dashboard" color={color} size={20} />)
          }
        } />

      <Tab.Screen 
        name="Contact" 
        component={ContactScreen}
        options={
          {
            tabBarName: 'Contact',
            tabBarIcon: ({color}) => (<MaterialCommunityIcons name="contacts" color={color} size={20} />)
          }
        } />

      <Tab.Screen 
        name="About" 
        component={AboutScreen}
        options={
          {
            tabBarName: 'About',
            tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="information-outline" color={color} size={20} />)
          }
        } />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;