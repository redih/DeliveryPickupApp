import React from 'react';
<<<<<<< HEAD
import { View, Text, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItem() { 
      return (
            <View>
                  <RestaurantImage />
                  <Text>Restaurant Name</Text>
            </View>
      );
      
=======
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
            image_url: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            categories: ["Food", "RESTAURANT"],
            price: "4$",
            reviews: 120,
            rating: 4.8,
      },
      {
            name: "Deserts",
            image_url: "https://media.istockphoto.com/photos/fresh-cakes-picture-id497959594?k=20&m=497959594&s=612x612&w=0&h=Pzq7lXr-_J2p9aNEio4QrV3pquWUr4TIAu3yRMqeV_E=",
            categories: ["Food", "RESTAURANT"],
            price: "5$",
            reviews: 120,
            rating: 4.9,
      },
      {
            name: "Chefs special",
            image_url: "https://i.ytimg.com/vi/8-VYKEZxgao/mqdefault.jpg",
            categories: ["Food", "RESTAURANT"],
            price: "5$",
            reviews: 120,
            rating: 4.9,
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
>>>>>>> 606938f16f197d49260a2a3baaf948d9a65a74e2

      );
}

<<<<<<< HEAD
const RestaurantImage = () => (
      <>
      <Image
            source={{
                  uri: "https://gray-wxix-prod.cdn.arcpublishing.com/resizer/HXFAGrPj5Cudx-09y34t7fuVEas=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/UIVUMKLMCVBU5A5ZEM7NW6T4HU.jpg"
            }}
            style={{ width: "100%", height: 180 }}

          
      />
        <TouchableOpacity style = {{position: "absolute", right: 20, top:20 }}>      
            <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
            </TouchableOpacity>
            </>
);
=======
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

>>>>>>> 606938f16f197d49260a2a3baaf948d9a65a74e2
