import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { postData } from '../../api/client';
import Input from '../../components/Input';
import Button from '../../components/Button';
import MainContent from '../../components/MainContent';
import { loginFailure, loginSuccess } from '../../redux/slice/loginSlice';
import Errors from '../../components/Errors';
import Loader from '../../components/Loader';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await postData('login', {
                email: email,
                password: password,
            });

            if (response.hasOwnProperty('token')) {
                dispatch(loginSuccess(response));
                navigation.navigate("Dashboard");
            }

            if(response.hasOwnProperty('error')) {
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

    return (
        <MainContent>
            {loading && <Loader />}
            
            <View style={styles.container}>
                <Image
                    source={require('../../assets/Artboard.png')}
                    style={styles.logo}
                />

                <Input
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Input
                    style={styles.input}
                    placeholder="Contraseña"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry
                />

                <Button
                    title='Iniciar sesión'
                    onPress={handleLogin}
                    typeButton='primary'
                />

                {errors && <Errors errors={errors} onClose={handleCloseErrors} />}
            </View>
        </MainContent>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
});

export default LoginScreen;
