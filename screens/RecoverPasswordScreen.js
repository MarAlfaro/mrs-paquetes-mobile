import { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { postData } from '../api/client';

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
      await postData('password/forget-password', { email });
      Alert.alert('Éxito', 'Se ha enviado un enlace para restablecer la contraseña a tu correo electrónico.');
      navigation.navigate('Login'); 
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo enviar el enlace para restablecer la contraseña.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Restablecer Contraseña" onPress={handlePasswordReset} />
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

export default ResetPasswordScreen;
