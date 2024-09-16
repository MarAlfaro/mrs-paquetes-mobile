import React from "react";
import { StyleSheet, Dimensions, SafeAreaView, FlatList } from "react-native";
import ItemTimeLine from "./ItemTimeLine";
import { Theme } from "../theme/Theme";

// Get screen dimensions
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

const CustomTimeline = ({ data, ...rest }) => {
    const renderItem = ({ item, index }) => {
        const isLastMember = index === data.length - 1;
        return (
            <ItemTimeLine
                {...rest}
                data={item}
                list={item.data}
                isLastMember={isLastMember}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                style={styles.listStyle}
                contentInset={styles.contentInset}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.contentContainerStyle}
                renderItem={renderItem}
                {...rest}
            />
        </SafeAreaView>
    );
};

// Define styles
const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: ScreenHeight,
        backgroundColor: "#f5f5f5",
        $dark: {
            backgroundColor: Theme.dark.primary
        }
    },
    listStyle: {
        paddingTop: 30,
        width: ScreenWidth,
        maxHeight: ScreenHeight - 120,
    },
    contentContainerStyle: {
        paddingBottom: 30,
        alignItems: "center",
    },
    contentInset: {
        bottom: 50,
    },
});

export default CustomTimeline;
