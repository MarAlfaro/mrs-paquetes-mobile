import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Alert, useColorScheme } from "react-native";
import { useDispatch } from "react-redux";
import { postData } from "../../api/client";
import Button from "../../components/Button";
import Input from "../../components/Input";
import MainContent from "../../components/MainContent";
import Errors from "../../components/Errors";
import Loader from "../../components/Loader";
import { registerFailure, registerSuccess } from '../../redux/slice/registerSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../theme/Theme';


const ConfirmationEmailScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [otp, setOtp] = useState("");
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const user = useSelector(state => state.register.user);

    const colorScheme = useColorScheme();
    const logoSource = colorScheme === 'dark' ? require('../../assets/logo-oscuro.png') : require('../../assets/logo-claro.png');

    const handleConfirmation = async() => {
        setLoading(true);
        try {
            const response = await postData("email-verification", {
                email: user.email,
                otp: otp,
            });

            if (response.success) {
                Alert.alert("Éxito", "El correo ha sido verificado correctamente.", [
                    {
                        text: "OK",
                        onPress: () => navigation.navigate("Login"),
                    },
                ]);
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


    const handleResendCode = async() => {
        setLoading(true);
        try {
            const response = await postData("send-email-verification", {
                email: user.email,
            });

            if (response.success) {
                Alert.alert("Mensaje", "Se ha vuelto enviar otro codigo de verficación revisa tu correo", [
                    {
                        text: "OK"
                    },
                ]);
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
                <Text style={styles.title}>Ingresa el codigo de verificacion!</Text>
                
                <Input
                    style={styles.input}
                    placeholder="Codigo de confirmación"
                    onChangeText={(text) => setOtp(text)}
                    value={otp}
                    autoCapitalize="none"
                />

                <Button
                    title="Verficar correo"
                    onPress={handleConfirmation}
                    typeButton="primary"
                />

                <Button
                    title="Volver a enviar código de verficación"
                    onPress={handleResendCode}
                    typeButton="warning"
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
        color: Theme.light.text,
        marginBottom: 15,
        textAlign: "center",
        $dark: {
            color: Theme.dark.text
        }
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
});

export default ConfirmationEmailScreen;