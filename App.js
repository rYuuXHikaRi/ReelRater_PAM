import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './components/screens/home_screen';

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
                </Stack.Navigator>
          </NavigationContainer>
  );
}
