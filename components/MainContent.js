import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Theme } from '../theme/Theme';

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
        backgroundColor: Theme.light.primary,
        padding: 10,
        $dark: {
            backgroundColor: Theme.dark.primaryDark,
        }
    },
});

export default MainContent;