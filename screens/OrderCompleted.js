import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuList from "../components/home/menuDetail/MenuList";
import firebase from "firebase/compat";
import OrderCheckoutList from "../components/home/menuDetail/OrderCheckoutList";


export default function OrderCompleted({navigation}) {


  const [lastOrder, setLastOrder] = useState({
    items: [],
  });
  const { items } = useSelector((state) => state.cartReducer.selectedItems);

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  const totalAmount = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const unsubscribe = db
  //     .collection("orders")
  //     .orderBy("createdAt", "desc")
  //     .limit(1)
  //     .onSnapshot((snapshot) => {
  //       snapshot.docs.map((doc) => {
  //         setLastOrder(doc.data());
  //       });
  //     });

  function backToHome(){
    navigation.navigate("Home")

  }


  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const unsubscribe = db
  //     .collection("orders")
  //     .orderBy("createdAt", "desc")
  //     .limit(1)
  //     .onSnapshot((snapshot) => {
  //       snapshot.docs.map((doc) => {
  //         setLastOrder(doc.data());
  //       });
  //     });


  //   return () => unsubscribe();
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            margin: 15,
            alignItems: "center",
            height: "100%",
          }}
        >
          <LottieView
            style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/animations/65530-restaurant-animated-icon.json")}
            autoPlay
            loop={true}
            speed={0.9}
          />
          {items.map((item, index) => (
            <OrderCheckoutList key={index} item={item} style={{}} />
          ))}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingBottom: 60,
              paddingTop: 20,
            }}
          >
            Your order at Mexican Tavern for {totalAmount}
            {"$"} has been placed!{" "}
          </Text>
          <MenuList
            foodList={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/122868-order-list-animation.json")}
            autoPlay
            loop={true}
            speed={0.7}
          />
          <Button style = {{}} title = "Back To Home" onPress={backToHome} color = "#a89a32"/> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
