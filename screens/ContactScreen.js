import React from "react";
import { View, StyleSheet, Text, ScrollView, Linking, TouchableOpacity } from "react-native";
import MainContent from "../components/MainContent";
import Icon from "react-native-vector-icons/FontAwesome";

const ContactScreen = ({ navigation }) => {
    const handleEmailPress = (email) => {
        Linking.openURL(`mailto:${email}`);
    };

    const handlePhonePress = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <MainContent>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Contactos de la Empresa</Text>
                <View style={styles.contact}>
                    <Text style={styles.contactName}>
                        <Icon name="user" size={20} color="#333" /> Lucia Aguilares
                    </Text>
                    <Text style={styles.contactInfo}>
                        <Icon name="briefcase" size={16} color="#333" /> Secretaria
                    </Text>
                    <TouchableOpacity onPress={() => handlePhonePress("+50372412530")}>
                        <Text style={[styles.contactInfo, styles.phone]}>
                            <Icon name="phone" size={16} color="#333" /> +503 72412530
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleEmailPress("aguilaresluci@gmail.com")}>
                        <Text style={[styles.contactInfo, styles.email]}>
                            <Icon name="envelope" size={16} color="#333" /> aguilaresluci@gmail.com
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contact}>
                    <Text style={styles.contactName}>
                        <Icon name="user" size={20} color="#333" /> Luis Benitez
                    </Text>
                    <Text style={styles.contactInfo}>
                        <Icon name="briefcase" size={16} color="#333" /> Contacto rapido
                    </Text>
                    <TouchableOpacity onPress={() => handlePhonePress("+50378805632")}>
                        <Text style={[styles.contactInfo, styles.phone]}>
                            <Icon name="phone" size={16} color="#333" /> +503 78805632
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleEmailPress("benitezluis28@gmail.com")}>
                        <Text style={[styles.contactInfo, styles.email]}>
                            <Icon name="envelope" size={16} color="#333" /> benitezluis28@gmail.com
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Agrega más contactos según sea necesario */}
            </ScrollView>
        </MainContent>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: '#00796b',
    },
    contact: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    contactName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#333',
    },
    contactInfo: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
    },
    phone: {
        textDecorationLine: "underline",
        color: '#00796b',
    },
    email: {
        textDecorationLine: "underline",
        color: '#00796b',
    },
});

export default ContactScreen;
