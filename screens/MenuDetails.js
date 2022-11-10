import React from "react";
import { View, Text } from "react-native";
import AboutMenu from "../components/home/menuDetail/AboutMenu";
import { Button, Divider } from "react-native-elements";
import MenuList from "../components/home/menuDetail/MenuList";
import Cart from "../components/home/menuDetail/Cart";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuDetails({ route, navigation }) {
  return (
    <SafeAreaView>
      <AboutMenu route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuList />
      <Cart/>
      <Cart navigation={navigation} />
    </SafeAreaView>
  );
}
