import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export default function RestaurantItem() { 
      
      return (
      <View>
             <RestaurantImage />
            < RestaurantInfo />
            
            </View>

           );
}

const RestaurantImage = () => (
      <>
      <Image
            source={{ uri: "https://gray-wxix-prod.cdn.arcpublishing.com/resizer/HXFAGrPj5Cudx-09y34t7fuVEas=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/UIVUMKLMCVBU5A5ZEM7NW6T4HU.jpg" }}
                  style={{ width: "100%", height: 180 }} />
            
            <TouchableOpacity
                  style={{ position: "absolute", right: 20, top: 20 }}> 
           
                  
                  <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" style={{ position: "absolute", right: 20, top: 20 }} />
            </TouchableOpacity>

            </>
            
);

const RestaurantInfo = () => (
          <View >
            <Text> Mexican Cuisine </Text>
            <Text> 20-25 min </Text>
            <Text> 4.5 </Text>
            </View>
      )
      
