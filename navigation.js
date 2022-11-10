import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import MenuDetails from "./screens/MenuDetails";
import LoginBox from "./screens/LoginBox";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
}
