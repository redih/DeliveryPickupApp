import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

const foodList = [
  {
    title: "Mexican Cups",
    description:
      "Mini Cups biscuits with seasoning mix, tomatoes and green chiles ",
    image:
      "https://images-gmi-pmc.edge-generalmills.com/d13cbaa5-fa4e-460c-ac53-9cdf02df562d.jpg",
    price: "4.00$",
  },
  {
    title: "Jalapeno Poppers Dip",
    description:
      "Cream cheese, jalapenos and bread crumbs are mixed to form a creamy dip",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/190426-instant-pot-jalapeno-popper-dip-horizontal-089-1557946986.jpg",
    price: "5.50$",
  },
  {
    title: "Deep Fried Gucamole",
    description:
      "Bright guacamole is coated in crushed chips and deep-fried to golden perfection. ",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-deep-fried-guac-still005-1571070801.jpg?crop=0.561xw%3A0.561xh%3B0.192xw%2C0.222xh&resize=480%3A270",
    price: "4.50$",
  },
  {
    title: "Jicama Fries",
    description:
      "Jicama is a root vegetable that is a great substitute for potatoes. ",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-01-Jicama-Fries%2FJicama_Fries_4",
    price: "3.50$",
  },
  {
    title: "Deep Fried Gucamole",
    description:
      "Bright guacamole is coated in crushed chips and deep-fried to golden perfection. ",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-deep-fried-guac-still005-1571070801.jpg?crop=0.561xw%3A0.561xh%3B0.192xw%2C0.222xh&resize=480%3A270",
    price: "4.50$",
  },
  {
    title: "Deep Fried Gucamole",
    description:
      "Bright guacamole is coated in crushed chips and deep-fried to golden perfection. ",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-deep-fried-guac-still005-1571070801.jpg?crop=0.561xw%3A0.561xh%3B0.192xw%2C0.222xh&resize=480%3A270",
    price: "4.50$",
  },
];

const styles = StyleSheet.create({
  menuListStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default function MenuList() {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={true}>
      <View>
        {foodList.map((food, index) => (
          <View key={index}>
            <View style={styles.menuListStyle}>
              <BouncyCheckbox
                iconStyle={{
                  borderColor: "Gray",
                  borderRadius: 7,
                }}
                fillColor="#a89a32"
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider
              width={0.4}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ height: 120, width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 10,
        marginLeft: 10,
      }}
    />
  </View>
);
