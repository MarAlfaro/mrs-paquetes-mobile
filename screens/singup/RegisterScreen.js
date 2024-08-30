import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, useColorScheme } from "react-native";
import { useDispatch } from "react-redux";
import { postData } from "../../api/client";
import Button from "../../components/Button";
import Input from "../../components/Input";
import MainContent from "../../components/MainContent";
import Errors from "../../components/Errors";
import Loader from "../../components/Loader";
import { registerFailure, registerSuccess } from '../../redux/slice/registerSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../theme/Theme';


const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const colorScheme = useColorScheme();
  const logoSource = colorScheme === 'dark' ? require('../../assets/logo-oscuro.png') : require('../../assets/logo-claro.png');

  const isPasswordSecure = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

  const handleRegister = async() => {
    
    if (!isPasswordSecure(password)) {
      setErrors("La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula, un número y un carácter especial.");
      return;
    }
    
    setLoading(true);
    try {
      const response = await postData("register", {
        email: email,
        password: password,
      });

      if (response.message) {
        dispatch(registerSuccess(
          {
            email: email,
          },
        ));
        navigation.navigate("ConfirmationEmailScreen");
      } else if (response.error) {
        setErrors(response.error);
      }
    } catch (error) {
      dispatch(registerFailure(error.message));
      setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseErrors = () => {
    setErrors(null);
  };

  return (
    <MainContent>
    {loading && <Loader />}

    <View style={styles.container}>
      <Image
        source={logoSource}
        style={styles.logo}
      />
      <Text style={styles.title}>¿Eres nuevo?, !Crea una cuenta! </Text>
      <Input
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <Button
        title="Crear Cuenta"
        onPress={handleRegister}
        typeButton="primary"
      />
      {errors && <Errors errors={errors} onClose={handleCloseErrors} />}
    </View>
  </MainContent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 15,
    marginTop: 150,
    marginBottom: 150,
    backgroundColor: Theme.light.surface,
    borderRadius: 15,
    $dark: {
      backgroundColor: Theme.dark.primary
    }
  },
  title: {
    color: Theme.light.text,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    $dark: {
      color: Theme.dark.text
    }
  },
  contra: {
    color: Theme.light.text,
    marginBottom: 15,
    textAlign: "center",
    $dark: {
      color: Theme.dark.text
    }
  },
  cuenta: {
    color: "#15b79f",
    marginBottom: 15,
    textAlign: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

export default RegisterScreen;