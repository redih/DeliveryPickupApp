import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export const mexicanFood = [
      {
            name: "Appetizers",
            image_url: "https://media.istockphoto.com/photos/small-4inch-soft-beef-tacos-picture-id1146906219?k=20&m=1146906219&s=612x612&w=0&h=9Svekwx7tMDsk5-T9h2Vv6qosqMVkmd1Gu16Dw4amoA=",
            categories: ["Food", "RESTAURANT"],
            price: "5$",
            reviews: 120,
            rating: 4.9,

      },
      {
            name: "Main course",
            image_url: "https://p.kindpng.com/picc/s/86-863070_download-burrito-png-free-download-taco-bell-burrito.png",
            categories: ["Food", "RESTAURANT"],
            price: "7$",
            reviews: 120,
            rating: 4.5,
      },
      {
            name: "Drinks",
            image_url: "https://media.istockphoto.com/photos/close-up-baked-chicken-and-cheese-quesadillas-served-with-salsa-and-picture-id1137678835?k=20&m=1137678835&s=612x612&w=0&h=0tKKiyiGsjZrJzVTPLd8w7HQkKM1g43APd1jlwiikq4=",
            categories: ["Food", "RESTAURANT"],
            price: "4$",
            reviews: 120,
            rating: 4.8,
      },
];

export default function RestaurantItem(props) {

      return (
            <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
                  {mexicanFood.map((restaurant, index) => (
                        <View
                              key={index}
                              style={{ marginTop: 10, padding: 15, backgrooundColor: "white" }}>
                              <RestaurantImage image = {restaurant.image_url} />
                              <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                        </View>
                  ))}
            </TouchableOpacity>

      );
}

const RestaurantImage = (props) => (
      <>
            <Image
                  source={{
                        uri: props.image,
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

