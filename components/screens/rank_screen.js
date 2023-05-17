import React from 'react';
import {Text,View,StyleSheet,StatusBar,SafeAreaView, Image, TextInput, Pressable, ScrollView,} from 'react-native';

import SafeViewAndroid from '../SafeViewAndroid';
import Navbar from '../Navbar';

const RankPage = ({navigation}) => {
    return(
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {flex: 1}]}>
            <View style={styles.contentArea}>
                
            </View>
            <View style={{position: "absolute", bottom: 0,}}>
                <Navbar whichPage="ranking"/>
            </View>
        </SafeAreaView>
    )
}
export default RankPage;

const styles = StyleSheet.create({


})