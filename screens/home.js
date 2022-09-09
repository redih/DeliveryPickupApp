import react from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";


export default function Home(){ 
      return (
            <SafeAreaView style={{backgroundColor : "gray", flex: 1}}>
                  <View style = {{backgroundColor : "white", padding: 20}}>
                        <HeaderTabs />
                        <SearchBar />
                        </View>
            </SafeAreaView>
      );
}