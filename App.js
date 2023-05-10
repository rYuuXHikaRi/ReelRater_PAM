import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from './components/screens/setting_screen';

const Stack = createStackNavigator();

export default function App() {
  return (
          <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen
                      name="home"
                      component={SettingScreen}
                      options={{ headerShown: false}}
                  />
                </Stack.Navigator>
          </NavigationContainer>
  );
}