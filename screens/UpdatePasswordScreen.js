import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image } from 'react-native';
import { postData } from '../api/client';
import Icon from 'react-native-vector-icons/FontAwesome';

const UpdatePasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdatePassword = async () => {
    if (!email || !otp || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    try {
      await postData('password/reset', {
        email,
        otp,
        password,
      });
      Alert.alert('Éxito', 'Contraseña restablecida con éxito.');
      navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
    } catch (error) {
      Alert.alert('Error', error.message || 'No se pudo restablecer la contraseña. Intenta nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/actualizar.png")} // Ajusta la ruta según sea necesario
        style={styles.logo}
      />
      <Text style={styles.title}>Actualizar Contraseña</Text>
      <Text style={styles.description}>
        Ingresa tu correo electrónico, el código OTP recibido, y tu nueva contraseña.
      </Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Código OTP"
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Nueva contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button
        title="Restablecer Contraseña"
        onPress={handleUpdatePassword}
        color="#15b79f" // Color del botón
      />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
      <Icon name="arrow-left" size={16} color="#15b79f" /> Volver al inicio de sesión
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: "#121621", // Fondo oscuro
    borderRadius: 15,
    margin: 15,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: "#ffffff", // Texto blanco para contraste
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    color: "#b3b9c6", // Texto secundario más claro
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#635bff', // Color del borde más oscuro
    borderRadius: 5,
    padding: 10,
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
    backgroundColor: '#ffffff', // Fondo blanco para el campo de texto
  },
  link: {
    color: "#15b79f", // Color de los enlaces
    marginTop: 15,
    textAlign: 'center',
  },
});

export default UpdatePasswordScreen;
