import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import MenuDetails from "./screens/MenuDetails";
import LoginBox from "./screens/LoginBox";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import Account from "./screens/Account";
import BottomTab from "./components/home/BottomTab";
import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();

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
          <Stack.Screen name="LoginBox" component={LoginBox} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MenuDetails" component={MenuDetails} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
