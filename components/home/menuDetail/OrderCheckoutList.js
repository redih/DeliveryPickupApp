import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function OrderCheckoutList({ item }) {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          fontSize: 20,
        }}
      >
        {title}
      </Text>
      <Text style={{ opacity: 0.6, fontSize: 15 }}> {price}</Text>
    </View>
  );
}
