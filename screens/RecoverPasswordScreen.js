import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const RecoverPasswordScreen = ({ onBack }) => {
  const [email, setEmail] = useState('');

  const handleRecover = () => {
    // Lógica para recuperar contraseña
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Recuperar" onPress={handleRecover} />
      <Button title="Volver" onPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  title: {
    color: "#15b79f",
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  }
});

export default RecoverPasswordScreen;
