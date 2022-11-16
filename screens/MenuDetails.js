import React from "react";
import { View, Text } from "react-native";
import AboutMenu from "../components/home/menuDetail/AboutMenu";
import { Divider } from "react-native-elements";
import MenuList from "../components/home/menuDetail/MenuList";
import Cart from "../components/home/menuDetail/Cart";
import { ScrollView } from "react-native";

const foodList = [
  {
    title: "Mexican Cups",
    description:
      "Mini Cups biscuits with seasoning mix, tomatoes and green chiles ",
    price: "4.00$",
    image:
      "https://images-gmi-pmc.edge-generalmills.com/d13cbaa5-fa4e-460c-ac53-9cdf02df562d.jpg",
  },
  {
    title: "Jalapeno Poppers Dip",
    description:
      "Cream cheese, jalapenos and bread crumbs are mixed to form a creamy dip",
    price: "5.50$",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/190426-instant-pot-jalapeno-popper-dip-horizontal-089-1557946986.jpg",
  },
  {
    title: "Deep Fried Gucamole",
    description:
      "Bright guacamole is coated in crushed chips and deep-fried to golden perfection. ",
    price: "4.50$",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-deep-fried-guac-still005-1571070801.jpg?crop=0.561xw%3A0.561xh%3B0.192xw%2C0.222xh&resize=480%3A270",
  },
  {
    title: "Jicama Fries",
    description:
      "Jicama is a root vegetable that is a great substitute for potatoes. ",
    price: "3.50$",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-01-Jicama-Fries%2FJicama_Fries_4",
  },
];

export default function MenuDetails({ route, navigation }) {
  return (
<<<<<<< HEAD
    
    <SafeAreaView>
      <AboutMenu route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuList foodList={foodList}/>
      {/* <Cart/> */}
      <Cart navigation={navigation} />
      <Text>

        {'\n'}
      </Text>
    </SafeAreaView>
    

    
=======
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AboutMenu route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuList foodList={foodList} />
        <Cart navigation={navigation} />
      </View>
    </ScrollView>
>>>>>>> 76ef92ee94add22e3003a690b635a4255ebfc1fa
  );
}
