import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { Divider } from "react-native-elements";
import Categories from "../components/home/categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItem, { mexicanFood } from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import BottomTab from "../components/home/BottomTab";
// import RestaurantItem, { mexicanFood } from "../components/RestaurantItem";

//const YELP_API_KEY = "FxaLdqDjplYWSg0FOHu7MUn9NN_j3tTVoDXbxFiR2vb6VufsvEYJWi5TQzJDJo9M8LeQuPqjhiI98458uzeVsti0K_hyvYDt2Q3q30ing6sPbZt3rwn-g_JSxbRBY3Yx";

export default function Home({ navigation }) {
  const HandleAccount = () => {
    navigation.navigate("Account");
  };

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
      <Text>{"\n\n"}</Text>
      <Button
        style={{}}
        title="Account"
        onPress={HandleAccount}
        color="#a89a32"
      />

      {/* <Button
        style={{}}
        title="Account"
        onPress={HandleAccount}
        color="#a89a32"
      /> */}

      <View style={{ backgroundColor: "white", padding: 20 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Categories /> */}
        <RestaurantItem navigation={navigation} />
        {/* //restaurantData={restaurantData}  */}
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}
