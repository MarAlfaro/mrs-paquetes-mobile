import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MainContent from "../components/MainContent";

const ContactScreen = ({ navigation }) => {
    return (
        <MainContent>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Contactos de la Empresa</Text>
                <View style={styles.contact}>
                    <Text style={styles.contactName}>Nombre: John Doe</Text>
                    <Text style={styles.contactInfo}>Cargo: Gerente de Ventas</Text>
                    <Text style={styles.contactInfo}>Teléfono: +1234567890</Text>
                    <Text style={styles.contactInfo}>Correo: john.doe@example.com</Text>
                </View>
                <View style={styles.contact}>
                    <Text style={styles.contactName}>Nombre: Jane Smith</Text>
                    <Text style={styles.contactInfo}>Cargo: Gerente de Marketing</Text>
                    <Text style={styles.contactInfo}>Teléfono: +0987654321</Text>
                    <Text style={styles.contactInfo}>Correo: jane.smith@example.com</Text>
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
        backgroundColor: '#e4e4e4'
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: '#15b79f'
    },
    contact: {
        backgroundColor: "#F0F0F0",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        width: "100%",
        borderWidth: 1,
        borderColor: "#ddd",
    },
    contactName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    contactInfo: {
        fontSize: 16,
        marginBottom: 3,
    },
});

export default ContactScreen;
