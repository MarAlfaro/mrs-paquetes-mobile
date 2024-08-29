import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Función recursiva para renderizar errores
const renderErrors = (errors, index) => {
    if (Array.isArray(errors)) {
        // Si el error es un array, se itera sobre sus elementos
        return (
            <View key={index} style={styles.errorContainer}>
                {errors.map((error, subIndex) => (
                    <View key={subIndex}>
                        {renderErrors(error, subIndex)}
                    </View>
                ))}
            </View>
        );
    } else if (typeof errors === 'object' && errors !== null) {
        // Si el error es un objeto, se itera sobre sus entradas
        return (
            <View key={index} style={styles.errorContainer}>
                {Object.entries(errors).map(([key, value]) => (
                    <View key={key}>
                        {renderErrors(value, key)}
                    </View>
                ))}
            </View>
        );
    } else if (typeof errors === 'string') {
        // Si el error es una cadena, se muestra directamente
        return <Text key={index} style={styles.errorText}>{errors}</Text>;
    }
    return null;
};

const Errors = ({ errors, onClose }) => {
    return (
        <View style={styles.errorCard}>
            <Text style={styles.errorTitle}>Errores:</Text>
            {renderErrors(errors, 0)}
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
    errorContainer: {
        marginBottom: 10,
    },
});

export default Errors;
