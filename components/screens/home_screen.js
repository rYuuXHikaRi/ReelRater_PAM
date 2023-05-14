import React from 'react';
import {Text,View,StyleSheet,StatusBar,SafeAreaView, Image, TextInput, Pressable, ScrollView,} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import SafeViewAndroid from '../SafeViewAndroid';
import Header from '../Header';
import Navbar from '../Navbar';


const Home = ({navigation}) => {
    return (
        <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
            <View style={styles.contentArea}>
                <View style={styles.greetingUser}>
                    <View style={{width: 152, height: 46, flexDirection:"column", alignContent: "center", justifyContent: "center"}}>
                        <Text style={styles.catalogText}>Hello Anonim</Text>
                        <Text style={{color: "#2E4F4F", fontSize: 14, }}>Welcome to ReelRater</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/Images/profile.png')} style={{width: 48, height:48}}/>
                    </View>
                </View>

                
                <View style={{marginBottom: 170}}>
                    <ScrollView>
                        <View style={styles.moviesCatalog}>
                                <Text style={styles.catalogText}>New Movies</Text>
                                <ScrollView horizontal={true} style={{marginTop: 9}}>
                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={styles.moviesCatalog}>
                                <Text style={styles.catalogText}>Horror Movies</Text>
                                <ScrollView horizontal={true} style={{marginTop: 9}}>
                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={styles.moviesCatalog}>
                                <Text style={styles.catalogText}>Comedy Movies</Text>
                                <ScrollView horizontal={true} style={{marginTop: 9}}>
                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image source={require('../../assets/Images/filmPoster.jpg')} style={styles.moviePoster} resizeMode='cover'/>
                                        </View>
                                        <Text style={{color: "#CBE4DE", fontSize: 12, fontWeight: "700"}}>Suzume no Tojimari</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>Anime, Fantasy</Text>
                                        <Text style={{color: "#7B8B88", fontSize: 10, fontWeight: "400"}}>⭐ 9.8</Text>
                                    </View>
                                </ScrollView>
                            </View>
                    </ScrollView>
                </View>


            </View>
                <View style={{position: "absolute", bottom: 0,}}>
                    <Navbar whichPage="home"/>
                </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#2C3333",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    contentArea: {
        paddingLeft: 34,
        paddingTop: 34,
        paddingRight: 11.49,
        paddingBottom: 34,
    },
    greetingUser: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",

        marginBottom: 23,
        marginRight: 22.51,
    },
    moviesCatalog: {
        marginTop: 25,
    },
    catalogText: {
        color: "#CBE4DE", 
        fontSize: 24,
        fontWeight: "700",
    },
    catalogBox: {
        marginRight: 12.77,
    },
    moviePoster: {
        width: 106.42, 
        height: 152.19, 
        borderRadius: 10,

        marginBottom: 0.009,
    },
    BoxNavbar: {
        position: "absolute",
        backgroundColor: "#CBE4DE",
        width: "100%",
        height: 40,
        top: 820,
        marginRight: 20,
        justifyContent: "space-between",
        alignItems: "baseline",
      },
})