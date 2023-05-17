import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import AuthObserver from './components/config/AuthObserver';
import LoginPage from './components/screens/login_screen';
import RegisterPage from './components/screens/regist_screen';
import Home from './components/screens/home_screen';
import DetailPage from './components/screens/detail_screen';
import SearchPage from './components/screens/seacrh_screen';
import RankPage from './components/screens/rank_screen';
import SettingScreen from './components/screens/setting_screen';

const Stack = createStackNavigator();

export default function App() {
  return (
          <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen
                      name="authObserver"
                      component={AuthObserver}
                      options={{ headerShown: false}}
                  /> 
                <Stack.Screen
                      name="login"
                      component={LoginPage}
                      options={{ headerShown: false}}
                  />
                  <Stack.Screen
                      name="register"
                      component={RegisterPage}
                      options={{ headerShown: false}}
                  />            
                  <Stack.Screen
                      name="home"
                      component={Home}
                      options={{ headerShown: false}}
                  />
                  <Stack.Screen
                      name="search"
                      component={SearchPage}
                      options={{ headerShown: false}}
                  />
                  <Stack.Screen
                      name="ranking"
                      component={RankPage}
                      options={{ headerShown: false}}
                  />
                  <Stack.Screen
                      name="detail"
                      component={DetailPage}
                      options={{ headerShown: false}}
                  />
                  <Stack.Screen
                      name="setting"
                      component={SettingScreen}
                      options={{ headerShown: false}}
                  />
                </Stack.Navigator>
          </NavigationContainer>
  );
}