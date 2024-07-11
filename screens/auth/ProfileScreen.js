import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import MainContent from "../../components/MainContent";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';
import formatDate from "../../utils/utils";
import * as Animatable from 'react-native-animatable';
import { fetchData } from '../../api/client';
import { useDispatch } from 'react-redux';
import { logout } from "../../redux/slice/loginSlice";
import Errors from '../../components/Errors';
import Loader from '../../components/Loader';
import { CommonActions } from "@react-navigation/native";

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const user = useSelector(state => state.login.user);

    const handleLogout = async () => {
        setLoading(true);
        try {
            const response = await fetchData('auth/logout',  
                {'token' : user.token},
                {
                    'Authorization': `Bearer ${user.token}`
                }
            );

            if (response.hasOwnProperty('success')) {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    })
                );
            }

            if(response.hasOwnProperty('error')) {
                setErrors(response.error);
            }

        } catch (error) {
            setErrors(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseErrors = () => {
        setErrors(null);
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const renderInfoItem = (icon, label, value) => (
        <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
                <Icon name={icon} size={24} color="#4285F4" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );

    return (
        <MainContent>
            <View style={styles.cardContainer}>
                {loading && <Loader />}
                <View style={styles.profileHeader}>
                    <View style={styles.profileImageContainer}>
                        <Icon name="person" size={80} color="#4285F4" style={styles.profileImage} />
                    </View>
                    <Text style={styles.title}>Perfil de Usuario</Text>
                </View>
                <View style={styles.profileInfo}>
                    {renderInfoItem("person", "Nombre", user.user.name)}
                    {renderInfoItem("email", "Correo electrónico", user.user.email)}
                    {renderInfoItem("event", "Fecha de creación", formatDate(user.user.created_at))}
                    {renderInfoItem("event", "Última modificación", formatDate(user.user.updated_at))}
                </View>
                <Animatable.View animation="fadeInUp" duration={1500} delay={500} style={styles.buttonContainer}>
                    <Button
                        title="Editar perfil"
                        onPress={toggleModal}
                        typeButton="primary"
                    />
                </Animatable.View>

                <Animatable.View animation="fadeInUp" duration={1500} delay={500} style={styles.buttonContainer}>
                    <Button
                        title="Cerrar Sesión"
                        onPress={() => handleLogout()}
                        typeButton="danger"
                    />
                </Animatable.View>

                {errors && <Errors errors={errors} onClose={handleCloseErrors} />}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={toggleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Editar Perfil</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre"
                                defaultValue={user.user.name}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Correo electrónico"
                                defaultValue={user.user.email}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Contraseña"
                                secureTextEntry={true}
                            />
                            <Button
                                title="Guardar Cambios"
                                onPress={toggleModal}
                                typeButton="primary"
                            />
                            <Button
                                title="Cancelar"
                                onPress={toggleModal}
                                typeButton="secondary"
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </MainContent>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        alignSelf: 'center',
    },
    profileInfo: {
        marginBottom: 20,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    iconContainer: {
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    value: {
        fontSize: 18,
        color: '#555',
    },
    buttonContainer: {
        marginTop: 20,
    },
   
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#f4f4f4',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default ProfileScreen;
