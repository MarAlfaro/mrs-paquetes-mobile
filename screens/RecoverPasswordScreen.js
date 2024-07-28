import axios from 'axios';
import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
     await axios.post('http://192.168.0.17:80/mrs-paquetes-api/public/api/password/forget-password', { email });
      Alert.alert('Éxito', 'Se ha enviado un enlace para restablecer la contraseña a tu correo electrónico.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo enviar el enlace para restablecer la contraseña.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 }}
      />
      <Button title="Restablecer Contraseña" onPress={handlePasswordReset} />
    </View>
  );
};

export default ResetPasswordScreen;