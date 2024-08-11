import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica para registro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  title: {
    color: "#15b79f",
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#d4d4d4',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    color: '#333',
  },
  button: {
    backgroundColor: '#15b79f',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#888',
    fontSize: 16,
  },
});

export default RegisterScreen;
