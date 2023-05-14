import React, { useState } from "react";
import {StyleSheet, View, TextInput, SafeAreaView, StatusBar} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import SafeViewAndroid from '../SafeViewAndroid';
import Navbar from '../Navbar';
const SearchPage = ({ navigation }) => {
    const [start, setAwal] = useState("");

    return (
      <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
        <View style={styles.BoxHeader}>
          <Icon name="ios-search" size={35} style={{color: "black", marginTop: -3, left: 12, height: 35}} ></Icon>
            <TextInput
              placeholder="Search"
              style={styles.input}
              onChangeText={(val) => setAwal(val)}
            />
        </View>
        <View style={{position: "absolute", bottom: 0,}}>
          <Navbar whichPage="search"/>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    BoxHeader: {
      backgroundColor: "#D9D9D9",
      width: 351,
      height: 50,
      borderRadius: 30,
      margin: 20,
      marginTop: 37,
      justifyContent: "center",
    },
    input: {
        position:"absolute",
        top: 5,
        height: 40,
        width: 351,
        marginLeft: 50,
        borderWidth: 1,
        borderColor:"transparent",
    },

  });

  export default SearchPage;