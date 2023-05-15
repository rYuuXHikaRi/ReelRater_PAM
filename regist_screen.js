import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,SafeAreaView,StatusBar} from "react-native";

import SafeViewAndroid from '../SafeViewAndroid';
import Header from '../Header';
import Navbar from '../Navbar';
const RegisterPage = ({ navigation }) => {
  const [start, setAwal] = useState("");

    return (
      <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
        <View style={styles.garis}>
          <Header headerTitle="   Register"/>
        </View>
        <View style={styles.form}>
            <Text style={styles.title}>Complete your personal data correctly</Text>
            <Text style={styles.required}>*required</Text>
            <Text style={styles.name}>Full Name*</Text>
            <View style={styles.line}>
              <TextInput
                style={styles.input}
                onChangeText={(val) => setAwal(val)}
              />
            </View>
            <Text style={styles.name}>E-mail*</Text>
            <View style={styles.line}>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setAwal(val)}
              />
            </View>
            <Text style={styles.phone}>Phone Number*</Text>
            <Text style={styles.nomor}>+62</Text>
            <View style={styles.line2}>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setAwal(val)}
              />
            </View>
            <Text style={styles.name}>Password*</Text>
            <View style={styles.line}>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setAwal(val)}
              />
            </View>
        </View>
        <View style={styles.BoxSubmit}>
          <Text style={styles.submit}>
            Register
          </Text>
        </View>
        <Text style={styles.reel}>
            ReelRater
        </Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex: 1
    },
    form: {
        backgroundColor: "#2C3333",
        position: "absolute",
        width: 321,
        height: 293,
        left: 32,
        top: 193,
    },
    garis: {
      width: "100%",
      height: 62,
      backgroundColor: "#BCBCBC",
      borderRadius: 1,
    },
    title: {
        color: "#CBE4DE",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 10,
    },
    required: {
        color: "red",
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 5,
    },
    name: {
        color: "#CBE4DE",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 25,
    },
    line: {
      width: 289,
      height: 1,
      backgroundColor: "white",
      borderRadius: 1,
      marginBottom: 8,
  },
  phone: {
    color: "#CBE4DE",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 8,
  },
  nomor: {
    color: "#CBE4DE",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  line2: {
    width: 242,
    left: 46,  
    height: 1,
    backgroundColor: "white",
    borderRadius: 1,
    marginBottom: 8,
  },
  BoxSubmit: {
    position: "absolute",
    width: 240,
    height: 50,
    top: 230,
    marginLeft: 50,
    margin: 280,
    backgroundColor: "white",
    borderRadius: 25,
    textAlign: "center",
    justifyContent: "center",
  },
  submit: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
    width: 289,
    height: 40,
    width: 351,
    textAlign: "left",
    borderWidth: 1,
    borderColor:"transparent",
  },

  });

  export default RegisterPage;