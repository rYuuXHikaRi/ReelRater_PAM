import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Pressable
} from "react-native";

import Octicons from "react-native-vector-icons/Octicons"
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class Navbar extends Component {
    render() {
        return (
                <View style={[styles.container, {backgroundColor: "#CBE4DE"}]}>
                    <Pressable style={styles.itemNavbar}>
                        <Foundation name="home" size={30} style={{color: this.props.whichPage === "home" ? "#0E8388" : "#2C3333"}}/>
                        <Text style={{fontSize: 12, fontWeight:"400", color: this.props.whichPage === "home" ? "#0E8388" : "#2C3333"}}>Home</Text>
                    </Pressable>
                    <Pressable style={styles.itemNavbar}>
                        <Octicons name="search" size={30} style={{color: this.props.whichPage === "search" ? "#0E8388" : "#2C3333"}}/>
                        <Text style={{fontSize: 12, fontWeight:"400", color:this.props.whichPage === "search" ? "#0E8388" : "#2C3333"}}>Search</Text>
                    </Pressable>
                    <Pressable style={styles.itemNavbar}>
                        <MaterialIcons name="bar-chart" size={30} style={{color: this.props.whichPage === "ranking" ? "#0E8388" : "#2C3333"}}/>
                        <Text style={{fontSize: 12, fontWeight:"400", color:this.props.whichPage === "ranking" ? "#0E8388" : "#2C3333"}}>Rank</Text>
                    </Pressable>
                    <Pressable style={styles.itemNavbar}>
                        <FontAwesome name="gear" size={30} style={{color: this.props.whichPage === "setting" ? "#0E8388" : "#2C3333"}}/>
                        <Text style={{fontSize: 12, fontWeight:"400", color: this.props.whichPage === "setting" ? "#0E8388" : "#2C3333"}}>Setting</Text>
                    </Pressable>
                </View>
        );
    }
}
export default Navbar;

const styles = StyleSheet.create({
    container: {
        width: 390,
        height: 60,

        flexDirection : 'row',
        height: 59,
        alignItems : "center",
        justifyContent: 'space-around',

        paddingTop: 8,

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    navbarText:{
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        color: "#CBE4DE",

        alignSelf: "center",
    },
    itemNavbar:{
        alignItems: "center",
        justifyContent: "center",
    },
});