import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';


const mexicanFood = [
      {
            name: "Taco",
            image: require("../assets/images/assets/chicken-quesadilla-recipe-5.jpg"),
            categories: ["Food", "RESTAURANT"],
            price: "5$",
            reviews: 120,
            rating: 4.9,

      },
      // {
      //       name: "Burrito",
      //       image: require("../assets/images/Burrito.JPG"),
      //       categories: ["Food", "RESTAURANT"],
      //       price: "7$",
      //       reviews: 120,
      //       rating: 4.5,
      // },
      // {
      //       name: "Quesadilla",
      //       image: require("../assets/images/chicken-quesadilla-recipe-5.jpg"),
      //       categories: ["Food", "RESTAURANT"],
      //       price: "4$",
      //       reviews: 120,
      //       rating: 4.8,
      // },
];


export default function RestaurantItem() {

      return (
            <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
                  {mexicanFood.map((restaurant, index) => (
                        <View
                              key={index}
                              style={{ marginTop: 10, padding: 15, backgrooundColor: "white" }}>
                              <RestaurantImage image={restaurant.image_url} />
                              <RestaurantInfo name={restaurant.name}
                                    rating={restaurant.rating} />
                        </View>
                  ))}
            </TouchableOpacity>

      );
}

const RestaurantImage = (props) => (
      <>
            <Image
                  source={{
                        uri: props.image_url,
                  }}
                  style={{ width: "100%", height: 180 }} />

            <TouchableOpacity
                  style={{ position: "absolute", right: 20, top: 20 }}>


                  <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" style={{ position: "absolute", right: 20, top: 20 }} />
            </TouchableOpacity>

      </>

);

const RestaurantInfo = (props) => (
      <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,

      }} >
            <View>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>  {props.name}
                  </Text>
                  <Text style={{ fontSize: 13, fontWeight: "gray" }}> 20-25 min </Text>
            </View>
            <View >
                  <Text style={{
                        backgroundColor: "#eee",
                        height: 30,
                        width: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 15,
                  }}> {props.rating}</Text>
            </View>
      </View>
)

