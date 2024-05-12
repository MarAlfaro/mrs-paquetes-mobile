import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MainContent from "../components/MainContent";

const ContactScreen = ({ navigation }) => {
    return (
        <MainContent>
            <View style={styles.container}>
                <Text>This is the contact screen</Text>
            </View>
        </MainContent>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
    }
});

export default ContactScreen;