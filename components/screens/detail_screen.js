import React from "react";
import {StyleSheet,Text,View,Image, SafeAreaView, StatusBar} from "react-native";

import SafeViewAndroid from '../SafeViewAndroid';
import Header from '../Header';

const DetailPage = ({ navigation }) => {
    return (
      <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
        <View style={styles.garis}>
          <Header headerTitle="   Detail"/>
        </View>
        <View style={styles.BoxGambar}>
          <Image source={require("../../assets/buya_hamka.png")} style={styles.gambar} />
        </View>
        <Text style={styles.judul}>
          Buya Hamka
        </Text>
        <View style={styles.BoxJudul}>
          <Text style={styles.cast}>
            Cast: Vino Bastian, Laudya Cynthia Bella, Donny Damara, more
          </Text>
          <Text style={styles.from}>
            Indonesia Movies
          </Text>
          <Text style={styles.rilis}>
            18 April 2023
          </Text>
          <Text style={styles.durasi}>
            1h 46m
          </Text>
        </View>
        <Text style={styles.genre}>
          Genres
        </Text>
        <View style={styles.BoxJenis}>
          <Text style={styles.jenis}>
            Biografi
          </Text>
        </View>
        <View style={styles.BoxJenis2}>
          <Text style={styles.jenis2}>
            Drama
          </Text>
        </View>
        <Text style={styles.sinopsis}>
          Sinopsis
        </Text>
        <View style={styles.BoxSinopsis}>
          <Text style={styles.spoiler}>
          Film ini lebih berfokus pada kehidupan Abdul Malik Karim Amrullah alias Buya Hamka saat aktif menjadi pengurus Muhammadiyah Makassar. 
          Selain itu, kita juga bisa melihat masa-masa Hamka sebagai pemimpin redaksi majalah Pedoman Masyarakat. Namun, kehidupan Hamka tak bisa 
          lepas dari berbagai konflik, termasuk kedatangan Jepang ke Indonesia.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor:"#2C3333",
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    gambar: {
      width: "100%",
      height: "100%",
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
      backgroundColor: "#2C3333",
      width: 70,
      height: 25,
      left: 100,
      top: 400,
      borderRadius: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    BoxJenis2: {
      position: "absolute",
      backgroundColor: "#2C3333",
      width: 70,
      height: 25,
      left: 180,
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
    jenis2: {
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
      backgroundColor: "#2C3333",
      width: 350,
      height: 200,
      left: 15,
      top: 500,
    },
    BoxJudul: {
      backgroundColor: "#2C3333",
      width: 190,
      height: 160,
      left: 180,
      top: 70,
      borderRadius: 10,
    },
    cast: {
      color: "white",
      alignContent: "space-between",
    },
    from:{
      color: "white",
      top: 8,
      alignContent: "space-between",
    },
    rilis: {
      color: "white",
      top: 16,
      alignContent: "space-between",
    },
    durasi: {
      color: "white",
      top: 24,
      alignContent: "space-between",
    },
    spoiler: {
      color: "white",
      top: 10,
      textAlign: "justify",
    },

  });

  export default DetailPage;