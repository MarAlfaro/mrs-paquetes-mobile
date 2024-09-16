import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import PointLine from "./PointLine";
import CardTimeLine from "./CardTimeLine";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

const ItemTimeLine = ({ data, list, isLastMember, ...rest }) => {
    const renderItem = (item, index) => {
        return <CardTimeLine {...rest} key={index} isCard data={item} />;
    };

    return (
        <View style={[styles.container]}>
            <PointLine
                {...rest}
                date={data.date}
                length={list.length}
                isLastMember={isLastMember}
            />
            <View style={styles.insideListContainer}>
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      width: ScreenWidth,
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 16,
    },
    insideListContainer: {
      marginTop: -24,
      flexDirection: "column",
    },
  });

export default ItemTimeLine;
