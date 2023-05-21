import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, SafeAreaView, StatusBar} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Ionicons";
import { useRoute } from "@react-navigation/core";

import { firebaseAuthentication } from '../config/firebase';
import { signOut } from 'firebase/auth';

import SafeViewAndroid from '../SafeViewAndroid';
import Navbar from '../Navbar';

const SettingScreen = ({navigation}) => {
  
  const signOutHandler = () => {
    signOut(firebaseAuthentication)
    .then(() => {
      console.log("Logout Sukses")
    }).catch((err) => console.log(err));
}

  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <View style={styles.button_profile}>
        <View style={styles.gambar}>
            <Image source={require("../../assets/Images/profile.png")} style={styles.gambar} />
        </View>
        <Text style={styles.buttonText_profile}>Username</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icon2 name="notifications-outline" size={29} style={{color: "black", marginLeft: 12}} ></Icon2>
        <Text style={styles.buttonText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="help-circle" size={29} style={{color: "black", marginLeft: 12}} ></Icon>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="info" size={29} style={{color: "black", marginLeft: 12}} ></Icon>
        <Text style={styles.buttonText}>About App</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_logout} onPress={() => signOutHandler()}>
        <Icon name="log-out" size={29} style={{color: "black", marginLeft: 20, marginTop: 5}} ></Icon>
        <Text style={styles.buttonText_logout}>Log Out</Text>
      </TouchableOpacity>
        <View style={{position: "absolute", bottom: 0,}}>
          <Navbar whichPage="setting"/>
        </View>
    </SafeAreaView>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3333',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button_profile: {
    backgroundColor: '#2E4F4F',
    width: 390,
    height: 101,
    marginBottom: 5,
  },
  buttonText_profile: {
    color: '#FFFFFF',
    fontSize: 24,
    marginTop: -40,
    marginLeft: 100,
  },
  gambar :{
    width: 70,
    height: 70,
    marginTop: 15,
    marginLeft: 12,
  },
  button: {
    backgroundColor: '#2E4F4F',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginBottom: 3,
    flexDirection : 'row',
    alignItems : 'center',
  },
  button_logout: {
    width: 138,
    height: 38,
    backgroundColor: '#CBE4DE',
    marginLeft: 125,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    flexDirection: 'column',
    marginLeft: 15
  },
  buttonText_logout: {
    fontSize: 16,
    color: 'black',
    marginLeft: 55,
    marginTop: -27,
    fontWeight: 'bold',
  },
});