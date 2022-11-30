import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

export default function OrderCompleted() {
  const { items } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  const totalAmount = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Text>
          Your order at Mexican Tavern for {totalAmount} has been placed!{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
}
