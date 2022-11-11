import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function Cart({}) {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  const totalAmount = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log(totalAmount);
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "relative",
          bottom: 5,
          zIndex: 999,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "#a89a32",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: 15,
              borderRadius: 50,
              width: 200,
              position: "relative",
            }}
          >
            <Text style={{ color: "black", fontSize: 20, marginRight: 50 }}>
              Cart
            </Text>
            <Text style={{ color: "black", fontSize: 20 }}>{totalAmount}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
