import React from "react";
import {StyleSheet,Text,View,Image,Pressable,} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const DetailPage = ({ navigation }) => {

    return (
      <View style={styles.container}>
        <View style={styles.BoxHeader}>
          <Icon name="ios-arrow-back-sharp" size={35} style={{color: "#CBE4DE"}} ></Icon>
          <Text style={styles.detail}>
            Detail
          </Text>
        </View>
        <View style={styles.BoxGambar}></View>
        <Text style={styles.judul}>
          Judul Film
        </Text>
        <View style={styles.BoxJudul}>
          <Text style={styles.cast}>
            Cast:
          </Text>
          <Text style={styles.from}>
            Asal Film:
          </Text>
          <Text style={styles.rilis}>
            Tanggal Rilis:
          </Text>
          <Text style={styles.durasi}>
            Durasi:
          </Text>
        </View>
        <Text style={styles.genre}>
          Genres
        </Text>
        <View style={styles.BoxJenis}>
          <Text style={styles.jenis}>
            Action
          </Text>
        </View>
        <Text style={styles.sinopsis}>
          Sinopsis
        </Text>
        <View style={styles.BoxSinopsis}></View>
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
      backgroundColor: "black",
      width: "100%",
      height: 40,
      top: 29,
    },
    detail: {
      color: "#CBE4DE",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "left",
      left: 36,
      top: -35,
    },
    BoxGambar: {
      position: "absolute",
      backgroundColor: "white",
      width: 146,
      height: 215,
      left: 15,
      top: 120,
      borderRadius: 10,
    },
    judul: {
      position: "absolute",
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      left: 230,
      top: 116,
      textAlign: "center",
    },
    genre: {
      position: "absolute",
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
      left: 15,
      top: 400,
    },
    BoxJenis: {
      position: "absolute",
      backgroundColor: "#335758",
      width: 70,
      height: 25,
      left: 100,
      top: 400,
      borderRadius: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    jenis: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
    },
    sinopsis: {
      position: "absolute",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "left",
      left: 15,
      top: 477,
    },
    BoxSinopsis: {
      position: "absolute",
      backgroundColor: "white",
      width: 350,
      height: 200,
      left: 15,
      top: 500,
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
    BoxJudul: {
      backgroundColor: "white",
      width: 190,
      height: 160,
      left: 180,
      top: 104,
      borderRadius: 10,
    },
    from:{
      alignContent: "space-between",
    },

  });

  export default DetailPage;