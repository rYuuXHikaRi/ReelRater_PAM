import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchPage = ({ navigation }) => {
    const [start, setAwal] = useState("");

    return (
      <View style={styles.container}>
        <View style={styles.BoxHeader}>
          <Icon name="ios-search" size={35} style={{color: "black", marginTop: -3, left: 12, height: 35}} ></Icon>
            <TextInput
              placeholder="Search"
              style={styles.input}
              onChangeText={(val) => setAwal(val)}
            />
        </View>
        <View style={styles.BoxNavbar}>
          <Icon name="home-sharp" size={35} style={{color: "black", left: 20}} ></Icon>
          <Icon name="ios-search" size={35} style={{color: "black", top: -34, left: 120}} ></Icon>
          <Icon name="md-trending-up-outline" size={39} style={{color: "black", top: -74, left: 220}} ></Icon>
          <Icon name="ios-settings" size={35} style={{color: "black", top: -115, left:324}} ></Icon>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor:"#2E4F4F",
      flex: 1
    },
    BoxHeader: {
      backgroundColor: "#D9D9D9",
      width: 351,
      height: 50,
      borderRadius: 30,
      margin: 20,
      top: 40,
      justifyContent: "center",
    },
    BoxNavbar: {
        position: "absolute",
        backgroundColor: "#CBE4DE",
        width: "100%",
        height: 40,
        top: 764,
        marginRight: 20,
        justifyContent: "space-between",
        alignItems: "baseline",
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