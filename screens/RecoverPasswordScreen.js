import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from "react-native";
import { postData } from "../api/client";
import Icon from 'react-native-vector-icons/FontAwesome';

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Por favor ingresa tu correo electrónico.');
      return;
    }

    try {
      await postData('password/forget-password', { email });
      Alert.alert('Éxito', 'Se ha enviado un enlace para restablecer la contraseña a tu correo electrónico.');
      navigation.navigate('UpdatePasswordScreen'); 
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo enviar el enlace para restablecer la contraseña. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/recuperar.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Restablecer Contraseña</Text>
      <Text style={styles.description}>
        Ingresa el correo electrónico asociado con tu cuenta. Te enviaremos un enlace para restablecer tu contraseña.
      </Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button
        title="Enviar Enlace de Restablecimiento"
        onPress={handlePasswordReset}
        color="#15b79f"
      />
      <Text style={styles.link} onPress={() => navigation.navigate('UpdatePasswordScreen')}>
        <Icon name="key" size={16} color="#15b79f" /> Tengo un código
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        <Icon name="arrow-left" size={16} color="#15b79f" /> Volver al inicio de sesión
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#121621",
    borderRadius: 15,
    margin: 15,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    color: "#b3b9c6",
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#635bff',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  link: {
    color: "#15b79f",
    marginTop: 15,
    textAlign: 'center',
  },
});

export default ResetPasswordScreen;
