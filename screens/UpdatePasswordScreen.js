import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const UpdatePasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdatePassword = async () => {
    try {
     await axios.post('http://192.168.0.17:80/mrs-paquetes-api/public/api/password/reset', {
        email,
        otp,
        password,
      });
      Alert.alert('Éxito', 'Contraseña restablecida con éxito.');
      navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
    } catch (error) {
    
      Alert.alert('Error', error.response ? error.response.data.message : 'No se pudo restablecer la contraseña. Intenta nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Restablecer Contraseña" onPress={handleUpdatePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default UpdatePasswordScreen;