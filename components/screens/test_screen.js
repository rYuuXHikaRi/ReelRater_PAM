import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import SafeViewAndroid from '../SafeViewAndroid';
import Navbar from '../Navbar';
import Header from '../Header';

const TestPage = () => {
    return(
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
            <View>
                <Header/>
            </View>
            
            <View style={{alignContent: "center", justifyContent: "center", alignItems:"center"}}>
                <Text>This is Test Page</Text>
            </View>

            <View>
                <Navbar/>
            </View>
        </SafeAreaView>
    );
}
export default TestPage;