import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import Dash from "react-native-dash-2";

const PointLine = ({
    date,
    isLastMember,
    dayTextStyle,
    length,
    monthTextStyle,
    ...rest
}) => {

    const _dashStyle = (length) => ({
        width: 1,
        height: 110 * length,
        flexDirection: "column",
    });

    const Point = ({ innerContainer, outerContainer }) => {
        return (
            <View style={[styles.innerContainer, styles.shadowStyle, innerContainer]}>
                <View style={[styles.outerContainer, outerContainer]} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerGlue}>
                <Text style={[styles.dayTextStyle, dayTextStyle]}>
                    {moment(date).format("DD")}
                </Text>
                <Text style={[styles.monthTextStyle, monthTextStyle]}>
                    {moment(date).format("YYYY-MM")}
                </Text>
            </View>
            <View style={styles.dividerStyle}>
                {!isLastMember && (
                    <Dash
                        dashGap={7}
                        dashColor="#006EFF"
                        style={_dashStyle(length)}
                        dashLength={length}
                        dashThickness={1}
                        {...rest}
                    />
                )}
                <Point {...rest} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: 24,
    },
    containerGlue: {
        marginTop: -14,
        marginRight: 12,
        alignItems: "center",
        flexDirection: "column",
    },
    dividerStyle: {
        paddingTop: 12,
        marginLeft: 12,
    },
    dayTextStyle: {
        fontSize: 16,
        color: "#006EFF",
        fontWeight: "700",
    },
    monthTextStyle: {
        marginTop: 5,
        fontSize: 14,
        color: "#999",
    },
    innerContainer: {
        top: 0,
        left: -4,
        width: 10,
        height: 10,
        backgroundColor: "#006EFF",
        borderRadius: 30,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    shadowStyle: {
        shadowColor: "#006EFF",
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    outerContainer: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "rgba(0,110,255, 0.1)",
        backgroundColor: "rgba(0,110,255, 0.1)",
    },
});

export default PointLine;
