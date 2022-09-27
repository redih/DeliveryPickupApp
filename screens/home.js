import react from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";



export default function Home(){ 
      return (
            <SafeAreaView style={{backgroundColor : "gray", flex: 1}}>
                  <View style = {{backgroundColor : "white", padding: 20}}>
                        <HeaderTabs />
                        <SearchBar />
                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                        <Categories />
                        <RestaurantItem />
                  </ScrollView>
            </SafeAreaView>
      );
}