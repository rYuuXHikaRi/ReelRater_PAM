import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// local

import SafeViewAndroid from "./SafeViewAndroid";

class Header extends Component {
    render() {
        return (
            <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {backgroundColor: this.props.whichPage === "AboutDev" ? "#CBE4DE" : "#CBE4DE",}]}>
                <View style={[styles.container, {backgroundColor: "black"}]}>
                    <Icon name="ios-arrow-back-sharp" size={25} style={{color: "#CBE4DE"}} ></Icon>
                    <Text style={styles.headerText}>{this.props.headerTitle}</Text>
                    <View style={styles.dummyItem}></View>   
                </View>
            </SafeAreaView>
        );
    }
}
export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        height: 59,
        alignItems : "center",
        justifyContent: 'space-between',
        backgroundColor: "#CBE4DE",

        paddingRight: 13,
        paddingLeft: 13,
    },
    headerText:{
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        color: "#CBE4DE",

        alignSelf: "center",
    },
    dummyItem : {
        width: 280,
        height: 30,
    },
});