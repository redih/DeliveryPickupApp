import react, { useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem, { mexicanFood } from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

//const YELP_API_KEY = "FxaLdqDjplYWSg0FOHu7MUn9NN_j3tTVoDXbxFiR2vb6VufsvEYJWi5TQzJDJo9M8LeQuPqjhiI98458uzeVsti0K_hyvYDt2Q3q30ing6sPbZt3rwn-g_JSxbRBY3Yx";

export default function Home() {
      //       const [restaurantData, setRestaurantData] = react.useState(mexicanFood);
      //     //  const getRestaurantFromYelp = () => {
      //             const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=Tacos&location=Canton`;
      //             const apiOptions = {
      //                   headers: {
      //                         Authorization: `Bearer ${YELP_API_KEY}`,
      //                   },
      //             };
      //             return fetch(yelpUrl, apiOptions)
      //                   .then((response) => response.json())
      //                   .then((json) => setRestaurantData(json.businesses));
      //       };
      
      //       useEffect(() => {
      //             getRestaurantFromYelp();
      //       }, []);

      return (
            <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
                  <View style={{ backgroundColor: "white", padding: 20 }}>
                        <HeaderTabs />
                        <SearchBar />
                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                        <Categories />
                        <RestaurantItem />
                        {/* //restaurantData={restaurantData}  */}
                  </ScrollView>
            </SafeAreaView>
      );
}