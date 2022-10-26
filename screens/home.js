
import { View, Text, SafeAreaView, ScrollView, AppRegistry } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";
import LoginBox from "./LoginBox";



export default function Home(){ 
      return (




            <SafeAreaView style={{backgroundColor : "gray", flex: 1}}>
                  <View style = {{backgroundColor : "white", padding: 20}}>
                        
                        <HeaderTabs/>
                        <SearchBar/>
                        <Categories/>
                        <RestaurantItem/>

                  


                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                        
                  </ScrollView>
            </SafeAreaView>
      );
}