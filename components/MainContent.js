import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const MainContent = ({ children }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                {children}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
});

export default MainContent;