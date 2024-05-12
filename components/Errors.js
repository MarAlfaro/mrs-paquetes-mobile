import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Errors = ({ errors, onClose }) => {
    return (
        <View style={styles.errorCard}>
            <Text style={styles.errorTitle}>Errores:</Text>
            {Array.isArray(errors) ? (
                errors.map((error, index) => (
                    <Text key={index} style={styles.errorText}>{error}</Text>
                ))
            ) : (
                Object.entries(errors).map(([key, value]) => (
                    <Text key={key} style={styles.errorText}>{`${key}: ${value}`}</Text>
                ))
            )}
            <TouchableOpacity onPress={onClose}>
                <Text style={styles.closeButton}>Cerrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    errorCard: {
        backgroundColor: '#FFCACA',
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
        alignSelf: 'stretch',
    },
    errorTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    errorText: {
        fontSize: 16,
        marginBottom: 5,
    },
    closeButton: {
        fontSize: 16,
        color: '#3E4396',
        textAlign: 'right',
        textDecorationLine: 'underline',
    },
});

export default Errors;
