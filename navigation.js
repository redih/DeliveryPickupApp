import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import MenuDetails from "./screens/MenuDetails";
import LoginBox from "./screens/LoginBox";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import Account from "./screens/Account";
<<<<<<< HEAD
=======
import BottomTab from "./components/home/BottomTab";
import OrderCompleted from "./screens/OrderCompleted";
>>>>>>> 4a405a32f3eecee5b1077c30f5410f85094101e7

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
<<<<<<< HEAD
=======
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
>>>>>>> 4a405a32f3eecee5b1077c30f5410f85094101e7
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
