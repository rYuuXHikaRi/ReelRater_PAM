import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Home from './components/screens/home_screen';
import DetailPage from './components/screens/detail_screen';
import SearchPage from './components/screens/seacrh_screen';

const Stack = createStackNavigator();

export default function App() {
  return (
          <NavigationContainer>
                <Stack.Navigator>
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
                      name="detail"
                      component={DetailPage}
                      options={{ headerShown: false}}
                  />
                </Stack.Navigator>
          </NavigationContainer>
  );
}