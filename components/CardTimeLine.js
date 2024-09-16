import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import { Theme } from "../theme/Theme";

const CardTimeLine = ({
    isCard = true,
    data,
    titleTextStyle,
    subtitleTextStyle,
    dateTextStyle,
    dateFormat = "YYYY-MM-DD, HH:mm",
}) => {
    const { title, subtitle, date } = data;
    return (
        <View
            style={[
                styles.container,
                styles.shadowStyle,
                isCard && {
                    backgroundColor: "transparent"
                },
            ]}
        >
            <View
                style={[
                    styles.cardContainer,
                    isCard && styles.cardContainerShadowStyle,
                ]}
            >
                <View style={styles.cardContainerGlue}>
                    <Text
                        numberOfLines={1}
                        style={[styles.titleTextStyle, titleTextStyle]}
                    >
                        {title}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={[styles.subtitleTextStyle, subtitleTextStyle]}
                    >
                        {subtitle}
                    </Text>
                </View>
            </View>
            <Text
                numberOfLines={1}
                style={[
                    styles.dateTextStyle,
                    isCard && { marginTop: 8 },
                    dateTextStyle,
                ]}
            >
                {moment(date).format(dateFormat)}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: "85%",
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 322,
        alignSelf: "baseline",
        flexDirection: "column",
        $dark: {
            backgroundColor: Theme.dark.primaryDark,
        }
    },
    cardContainerGlue: {
        width: "100%",
        paddingLeft: 16,
    },
    titleTextStyle: {
        color: "#556084",
        fontSize: 16,
        fontWeight: "bold",
    },
    subtitleTextStyle: {
        color: "#8c93ab",
        fontSize: 14,
        marginTop: 8,
        fontWeight: "600",
    },
    dateTextStyle: {
        color: "#999",
        fontSize: 13,
        marginLeft: 32,
        marginTop: 0,
    },
    shadowStyle: {
        backgroundColor: "transparent",
        shadowColor: "#000",
        shadowRadius: 7,
        shadowOpacity: 0.09,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    cardContainer: {
        marginTop: -5,
        paddingTop: 12,
        marginLeft: 24,
        borderRadius: 12,
        paddingBottom: 6,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#F0F5FF",
    },
    cardContainerShadowStyle: {
        paddingBottom: 12,
        shadowColor: "#000",
        backgroundColor: "#fff",
        shadowRadius: 7,
        shadowOpacity: 0.05,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
});


export default CardTimeLine;
