import React from "react";
import { View, Text, Image } from "react-native";


const items = [
      {

            image: require("../assets/images/shopping-bag.png"),
            text: 'Pickup',
      },
      {
            image: require("../assets/images/bread.png"),
            text: 'Bakery Items',
      },
      {
            image: require("../assets/images/fast-food.png"),
            text: 'Fast Food',
      },
      {
            image: require("../assets/images/deals.png"),
            text: 'Deals',
      },
      {
            image: require("../assets/images/coffee.png"),
            text: 'Coffee & Tea',
      },
      {
            image: require("../assets/images/desserts.png"),
            text: 'Desserts',
      },
      {
            image: require("../assets/images/soft-drink.png"),
            text: 'Soft Drinks',
      },
      {
            image: require("../assets/images/burger.png"),
            text: 'Burger',
      },
      {
            iamge: require("../assets/images/deals.png"),
            text: 'Deals',
      },
      {
            image: require("../assets/images/coffee.png"),
            text: 'Coffee & Tea',
      },
      {
            image: require("../assets/images/desserts.png"),
            text: 'Desserts',
      },

];


export default function Categories() {
      return (
            <View>
                  <Image source = {items[0].image} />
            </View>
      );
}