import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Cart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        bottom: -220,
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
            marginTop: 10,
            backgroundColor: "#a89a32",
            alignItems: "center",
            padding: 15,
            borderRadius: 50,
            width: 150,
            position: "relative",
          }}
        >
          <Text style={{ color: "black", fontSize: 15 }}> Cart </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
