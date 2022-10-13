import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import MenuDetails from "./screens/MenuDetails";
import LoginBox from "./screens/LoginBox";

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginBox"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MenuDetails" component={MenuDetails} />
        <Stack.Screen name="LoginBox" component={LoginBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
