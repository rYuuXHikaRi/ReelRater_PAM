import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const LoginPage = ({navigation}) => {
    const [start, setAwal] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.BoxLogin}>
                <Text style={styles.in}>
                    Log In
                </Text>
                <Text style={styles.email}>
                    Email or Phone Number
                </Text>
                <Icon name="mail" size={20} style={{position: "absolute", color: "white", top: 139, left: 29}} ></Icon>
                <View style={styles.line}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(val) => setAwal(val)}
                    />
                </View>
                <Text style={styles.pass}>
                    Password
                </Text>
                <Icon name="lock-closed" size={20} style={{position: "absolute", color: "white", top: 220, left: 29}} ></Icon>
                <Icon name="ios-eye" size={20} style={{position: "absolute", color: "white", top: 223, left: 300}} ></Icon>
                <View style={styles.line2}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(val) => setAwal(val)}
                    />
                </View>
                <View style={styles.BoxLogin2}>
                    <Text style={styles.login}>
                        Login
                    </Text>
                </View>
                <Text style={styles.any}>
                    Don't have an account yet?
                </Text>
                <Text style={styles.any2}>
                    Create one here
                </Text>
            </View>
            <Text style={styles.reel}>
                ReelRater
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#2E4F4F",
      flex: 1
    },
    BoxLogin: {
        position: "absolute",
        backgroundColor: "#0E8388",
        width: 360,
        height: 360,
        left: 14,
        top: 184,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 10
    },
    in: {
        position: "absolute",
        color: "white",
        fontSize: 32,
        marginTop: 30,
        left: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    BoxLogin2: {
        position: "absolute",
        width: 240,
        height: 50,
        marginLeft: 50,
        margin: 280,
        backgroundColor: "white",
        borderRadius: 25,
        textAlign: "center",
        justifyContent: "center",
    },
    login: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    email: {
        position: "absolute",
        color: "white",
        top: 100,
        left: 32,
        fontSize: 16,
        fontWeight: "bold",
    },
    line: {
        position: "absolute",
        width: 289,
        height: 1,
        left: 30,
        top: 160,
        backgroundColor: "white",
        borderRadius: 1,
    },
    pass: {
        position: "absolute",
        color: "white",
        top: 180,
        left: 32,
        fontSize: 16,
        fontWeight: "bold",
    },
    line2: {
        position: "absolute",
        width: 289,
        height: 1,
        left: 30,
        top: 244,
        backgroundColor: "white",
        borderRadius: 1,
    },
    any: {
        position: "absolute",
        left: 95,
        top: 358,
    },
    any2: {
        position: "absolute",
        left: 127,
        top: 374,
        textDecorationLine: "underline",
    },
    reel: {
        color: "#0E838880",
        position: "absolute",
        width: 171,
        height: 44,
        left: 109,
        top: 742,
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        position:"absolute",
        top: -30,
        width: 189,
        height: 40,
        width: 351,
        marginLeft: 20,
        borderWidth: 1,
        borderColor:"transparent",
    },

})
export default LoginPage