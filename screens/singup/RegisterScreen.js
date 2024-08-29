import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
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


const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async() => {
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
        source={require("../../assets/logo-claro.png")}
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
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },
  title: {
    color: "#15b79f",
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contra: {
    color: "#8590a5",
    marginBottom: 15,
    textAlign: "center",
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
