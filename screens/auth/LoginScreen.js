import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { postData } from "../../api/client";
import Input from "../../components/Input";
import Button from "../../components/Button";
import MainContent from "../../components/MainContent";
import { loginFailure, loginSuccess } from "../../redux/slice/loginSlice";
import Errors from "../../components/Errors";
import Loader from "../../components/Loader";
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await postData("login", {
        email: email,
        password: password,
      });

      if (response.hasOwnProperty("token")) {
        dispatch(loginSuccess(response));
        navigation.navigate("Dashboard");
      }

      if (response.hasOwnProperty("error")) {
        setErrors(response.error);
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseErrors = () => {
    setErrors(null);
  };

  const handleRecoverPassword = () => {
    navigation.navigate("RecoverPasswordScreen"); // Navega a RecoverPasswordScreen
  };
  const handleUpdatePassword = () => {
    navigation.navigate("UpdatePasswordScreen"); // Navega a RecoverPasswordScreen
  };

  const handleRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <MainContent>
      {loading && <Loader />}

      <View style={styles.container}>
        <Image
          source={require("../../assets/Artboard.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>¡Bienvenido a Mrs. Paquetes! </Text>
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
        <Text onPress={handleRecoverPassword} style={styles.contra}>
          <Icon name="lock" size={16} color="#8590a5" />{"¿Olvidaste tu contraseña?"}
        </Text>
        <Text onPress={handleUpdatePassword} style={styles.contra}>
          <Icon name="lock" size={16} color="#8590a5" />{"tengo un codigo"}
        </Text>
        <Button
          title="Iniciar sesión"
          onPress={handleLogin}
          typeButton="primary"
        />
        <Text>¿No tienes cuenta? </Text>
        <Text onPress={handleRegister} style={styles.cuenta}>
          Registrate{" "}
        </Text>
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

export default LoginScreen;
