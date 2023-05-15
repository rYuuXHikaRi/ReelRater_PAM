import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import LoginPage from './components/screens/login_screen';
import RegisterPage from './components/screens/regist_screen';

const Stack = createStackNavigator();

export default function App() {
  return (
          <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen

                      name="login"
                      component={LoginPage}
                      options={{ headerShown: false}}
                  />
                </Stack.Navigator>
          </NavigationContainer>
  );
}