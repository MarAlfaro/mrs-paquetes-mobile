import React from "react";
import { Text, StyleSheet, ScrollView, Image } from "react-native";
import MainContent from "../components/MainContent";

const AboutScreen = () => {
  return (
    <MainContent style={styles.main}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/paquetes.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>¡Bienvenido a Mrs. Paquetes!</Text>
        <Text style={styles.description}>
          Somos líderes en el seguimiento de paquetería, ofreciendo soluciones innovadoras para que siempre sepas dónde están tus envíos.
        </Text>
        <Text style={styles.description}>
          Nuestra misión es brindarte la mejor experiencia en el seguimiento de tus paquetes, asegurándonos de que lleguen a tiempo y en perfecto estado.
        </Text>
        
        <Text style={styles.description}>
          Gracias por confiar en nosotros. Estamos aquí para ayudarte y asegurarnos de que tu experiencia sea excepcional.
        </Text>
      </ScrollView>
    </MainContent>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#FFFFFF',
    
  },
  main: {
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#15b79f",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "left",
    marginBottom: 15,
    margin:10
  },
});

export default AboutScreen;