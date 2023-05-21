import React, { useEffect, useState } from 'react';
import { Text,View,StyleSheet,StatusBar,SafeAreaView, Image, Pressable, ScrollView, FlatList } from 'react-native';
import { useRoute } from "@react-navigation/core";
import Axios from 'axios';

import SafeViewAndroid from '../SafeViewAndroid';
import Navbar from '../Navbar';


const Home = ({navigation}) => {
    const apiKey = 'k_o94atzcn';
    const apiUpcomingMovies = 'https://imdb-api.com/en/API/ComingSoon/' + apiKey;
    const apiNewMovies = 'https://imdb-api.com/en/API/InTheaters/' + apiKey;
    const apiIndonesianMovies = 'https://imdb-api.com/API/AdvancedSearch/' + apiKey + '?user_rating=9.8,10&num_votes=0,&countries=id&languages=id';
    const apiHorrorMovies = 'https://imdb-api.com/API/AdvancedSearch/' + apiKey +'?user_rating=9.8,10&num_votes=0,&genres=horror';
    const apiComedyMovies = 'https://imdb-api.com/API/AdvancedSearch/'+ apiKey + '?user_rating=9.8,10&num_votes=0,&genres=comedy';

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [indonesianMovies, setIndonesianMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);

    const updateUpComingMovies = async() => {
        try{
            const resp=await Axios.get(apiNewMovies);
            setUpcomingMovies(resp.data.items);
        } catch (error) {
            alert(error.message);
        }
    }

    const updateNewMovies = async() => {
        try{
            const resp=await Axios.get(apiNewMovies);
            setNewMovies(resp.data.items);
        } catch (error) {
            alert(error.message);
        }
    }

    const updateIndonesianMovies = async() => {
        try{
            const resp=await Axios.get(apiIndonesianMovies);
            setIndonesianMovies(resp.data.results);
        } catch (error) {
            alert(error.message);
        }
    }

    const updateHorrorMovies = async() => {
        try{
            const resp=await Axios.get(apiHorrorMovies);
            setHorrorMovies(resp.data.results);
        } catch (error) {
            alert(error.message);
        }
    }

    const updateComedyMovies = async() => {
        try{
            const resp=await Axios.get(apiComedyMovies);
            setComedyMovies(resp.data.results);
        } catch (error) {
            alert(error.message);
        }
    }

    const getAllData= () => {
        updateUpComingMovies();
        updateHorrorMovies();
        updateIndonesianMovies();
        updateNewMovies();
        updateComedyMovies();
    }

    useEffect(() => {
        getAllData();
    }, []);
    
    
    const route = useRoute();
    const displayName = route.params.displayName;
    return (
        <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
            <View style={styles.contentArea}>
                <View style={styles.greetingUser}>
                    <View style={{width: 152, height: 46, flexDirection:"column", alignContent: "center", justifyContent: "center"}}>
                        <Text style={styles.catalogText}>Hello {displayName}</Text>
                        <Text style={{color: "#2E4F4F", fontSize: 14, }}>Welcome to ReelRater</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/Images/profile.png')} style={{width: 48, height:48}}/>
                    </View>
                </View>

                
                <View style={{marginBottom: 160}}>
                    <ScrollView>
                        <View style={styles.moviesCatalog}>
                                <Text style={styles.catalogText}>Upcoming Movies</Text>
                                <ScrollView horizontal={true} style={{marginTop: 9}}>

                                    <View style={styles.catalogBox}>
                                        <View>
                                            <Image style={styles.moviePoster} resizeMode='cover'/>
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
        marginBottom: 10,
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