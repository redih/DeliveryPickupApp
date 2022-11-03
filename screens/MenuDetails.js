import React from "react";
import { View, Text } from "react-native";
import AboutMenu from "../components/home/menuDetail/AboutMenu";
import { Divider } from "react-native-elements";
import MenuList from "../components/home/menuDetail/MenuList";
import Cart from "../components/home/menuDetail/Cart";

export default function MenuDetails({ route, navigation }) {
  return (
    <View>
      <AboutMenu route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuList />
      <Cart navigation={navigation} />
    </View>
  );
}
