import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, placeholder, keyboardType, autoCapitalize, secureTextEntry }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#757575" // Color de texto de marcador de posición
            underlineColorAndroid="transparent" // Ocultar línea de fondo en Android
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 56, // Altura aumentada para cumplir con las pautas de Material Design
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 4, // Se recomienda el uso de bordes redondeados
        paddingHorizontal: 16, // Mayor relleno horizontal
        marginBottom: 16, // Mayor espacio inferior
        elevation: 2, // Sombra en Android
        shadowColor: '#000000', // Color de la sombra en iOS
        shadowOpacity: 0.1, // Opacidad de la sombra en iOS
        shadowRadius: 3, // Radio de la sombra en iOS
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra en iOS
    },
});

export default Input;
